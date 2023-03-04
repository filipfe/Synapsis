from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from db.database import get_db

from . import schemas, crud


router = APIRouter()


@router.post("/signup")
async def signup(user: schemas.Signup, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already exists")
    crud.create_user(db=db, user=user)
    raise HTTPException(status_code=201, detail='Account created')