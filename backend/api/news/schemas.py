from pydantic import BaseModel
from datetime import date


class News(BaseModel):
    title: str
    desc: str
    date: date

    class Config:
        orm_mode = True
