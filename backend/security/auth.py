from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

from sqlalchemy.orm import Session

from pydantic import BaseModel

from fastapi_jwt_auth import AuthJWT

from .settings import settings
from api.users.crud import get_user

import jwt


class Settings(BaseModel):
    authjwt_secret_key: str = settings.SECRET_KEY

@AuthJWT.load_config
def get_config():
    return Settings()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def decode_token(token: str):
    try:
        secret_key = settings.SECRET_KEY
        decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
        user_id = decoded_token.get("sub")
        return user_id
    except jwt.exceptions.ExpiredSignatureError:
        raise HTTPException(status_code=400, detail="Token has expired")
    except jwt.exceptions.DecodeError:
        raise HTTPException(status_code=400, detail="Invalid token")


def get_current_user(db: Session, token: str = Depends(oauth2_scheme)):
    user_id = decode_token(token)
    user = get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    return user





