from fastapi import HTTPException, UploadFile
from sqlalchemy.orm import Session
from cloudinary.uploader import upload, destroy

from db.models import Event

from . import schemas


def add_event(db: Session, text: str, image: UploadFile):
    file_type = image.filename.split('.')[-1]
    if file_type in ['jpg', 'jpeg', 'png']:
        resource_type = 'image'
    elif file_type in ['mp4', 'mkv', 'avi']:
        resource_type = 'video'
    else:
        raise ValueError("Invalid file type. Only jpg, jpeg, png, mp4, mkv, and avi are allowed.")
    result = upload(image.file, resource_type=resource_type, folder='Synapsis/Events')
    url = result.get("url").replace("http://", "https://")

    db_event = Event(
        text=text,
        image=url
    )
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event


def get_events(db: Session):
    return db.query(Event).all()


def delete_event(db: Session, event_id: int):
    db_event = db.query(Event).filter_by(id=event_id)
    public_id = db_event.first().image.split("/")[-1].split(".")[0]
    destroy("Synapsis/Events/" + public_id)
    db_event.delete()
    db.commit()
    raise HTTPException(status_code=204)

