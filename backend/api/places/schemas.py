from pydantic import BaseModel
from datetime import date


class Places(BaseModel):
    phone: str
    email: str
    image: str
    text: str

    class Config:
        orm_mode = True
