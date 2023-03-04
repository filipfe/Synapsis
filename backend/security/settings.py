from pydantic import BaseSettings


class Settings(BaseSettings):
    SECRET_KEY: str
    DB_HOST: str
    DB_PASSWORD: str
    class Config:
        env_file = ".env"

settings = Settings()