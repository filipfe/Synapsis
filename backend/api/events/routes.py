from fastapi import APIRouter, Depends, HTTPException, UploadFile
from sqlalchemy.orm import Session
from typing import List

from db.database import get_db
from security.auth import oauth2_scheme, get_current_user

from . import schemas, crud


router = APIRouter()


@router.post("/events/add")
async def add_event(text: str, image: UploadFile, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = get_current_user(db, token)
    if not user.is_admin:
        raise HTTPException(status_code=400, detail="No permision")
    return crud.add_event(db, text, image)


@router.delete("/events/{event_id}/delete")
async def delete_event(event_id: int, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = get_current_user(db, token)
    if not user.is_admin:
        raise HTTPException(status_code=400, detail="No permision")
    return crud.delete_event(db, event_id)


@router.get("/events", response_model=List[schemas.Events])
async def read_events(db: Session = Depends(get_db)):
    return crud.get_events(db)


