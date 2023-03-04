from pydantic import BaseModel
from datetime import datetime


class News(BaseModel):
    title: str
    desc: str
    date: datetime

    class Config:
        orm_mode = True
