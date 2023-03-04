from sqlalchemy import Column, Integer, String, TIMESTAMP, text as atext

from db.database import Base


class Place(Base):
    __tablename__ = "places"

    id = Column(Integer, primary_key=True, index=True)
    phone = Column(String, nullable=False)
    email = Column(String, nullable=False)
    image = Column(String, nullable=False)
    text = Column(String, nullable=False)