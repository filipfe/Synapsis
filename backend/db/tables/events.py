from sqlalchemy import Column, Integer, String

from db.database import Base


class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, nullable=False)
    image = Column(String, nullable=False)