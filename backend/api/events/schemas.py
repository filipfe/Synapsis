from pydantic import BaseModel


class Events(BaseModel):
    text: str
    image: str

    class Config:
        orm_mode = True
