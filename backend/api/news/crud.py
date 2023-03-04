from fastapi import HTTPException
from sqlalchemy.orm import Session

from db.models import New

from . import schemas


def add_new(db: Session, title: str, desc: str):
    db_new = New(
        title=title,
        desc=desc
    )
    db.add(db_new)
    db.commit()
    db.refresh(db_new)
    return db_new


def get_news(db: Session):
    return db.query(New).all()


def delete_new(db: Session, new_id: int):
    db_new = db.query(New).filter_by(id=new_id)
    if not db_new.first():
        raise HTTPException(status_code=204)
    db_new.delete()
    db.commit()
    raise HTTPException(status_code=204, detail="deleted")

