from fastapi import HTTPException, UploadFile
from sqlalchemy.orm import Session
from cloudinary.uploader import upload

from db.models import Place

from . import schemas


def add_place(db: Session, phone: str, email: str, image: UploadFile, text: str):
    file_type = image.filename.split('.')[-1]
    if file_type in ['jpg', 'jpeg', 'png']:
        resource_type = 'image'
    elif file_type in ['mp4', 'mkv', 'avi']:
        resource_type = 'video'
    else:
        raise ValueError("Invalid file type. Only jpg, jpeg, png, mp4, mkv, and avi are allowed.")
    result = upload(image.file, resource_type=resource_type, folder='Synapsis/Places')
    url = result.get("url").replace("http://", "https://")

    db_place = Place(
        phone=phone,
        email=email,
        image=url,
        text=text
    )
    db.add(db_place)
    db.commit()
    db.refresh(db_place)
    return db_place


def get_places(db: Session):
    return db.query(Place).all()


def delete_place(db: Session, place_id: int):
    db.query(Place).filter_by(id=place_id).delete()
    db.commit()
    raise HTTPException(status_code=204)

