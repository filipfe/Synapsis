from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from db.database import get_db
from security.auth import oauth2_scheme, get_current_user

from . import schemas, crud

router = APIRouter()


@router.post("/news/add")
async def add_new(title: str, desc: str, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = get_current_user(db, token)
    if not user.is_admin:
        raise HTTPException(status_code=400, detail="No permision")
    return crud.add_new(db, title, desc)


@router.delete("/news/{new_id}/delete")
async def delete_new(new_id: int, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = get_current_user(db, token)
    if not user.is_admin:
        raise HTTPException(status_code=400, detail="No permision")
    return crud.delete_new(db, new_id)


@router.get("/news", response_model=List[schemas.News])
async def read_news(db: Session = Depends(get_db)):
    return crud.get_news(db)


