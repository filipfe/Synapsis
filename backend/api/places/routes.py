from fastapi import APIRouter, Depends, HTTPException, UploadFile
from sqlalchemy.orm import Session
from typing import List

from db.database import get_db
from security.auth import oauth2_scheme, get_current_user

from . import schemas, crud

router = APIRouter()


@router.post("/places/add")
async def add_place(phone: str, email: str, image: UploadFile, text: str, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = get_current_user(db, token)
    if not user.is_admin:
        raise HTTPException(status_code=400, detail="No permision")
    return crud.add_place(db, phone, email, image, text)


@router.delete("/places/{place_id}/delete")
async def delete_place(place_id: int, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = get_current_user(db, token)
    if not user.is_admin:
        raise HTTPException(status_code=400, detail="No permision")
    return crud.delete_place(db, place_id)


@router.get("/places", response_model=List[schemas.Places])
async def read_places(db: Session = Depends(get_db)):
    return crud.get_places(db)


