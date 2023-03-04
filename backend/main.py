from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_jwt_auth import AuthJWT
from datetime import timedelta
from starlette.templating import Jinja2Templates

from db.database import get_db, metadata, engine
from security.password import verify_password
from security.auth import Session
from security.settings import settings

from api.users import routes as users_routes, crud
from api.news import routes as news_routes
from api.places import routes as places_routes
from api.events import routes as events_routes

import cloudinary


cloudinary.config( 
  cloud_name = settings.CLOUDINARY_CLOUD_NAME, 
  api_key = settings.CLOUDINARY_API_KEY, 
  api_secret = settings.CLOUDINARY_API_SECRET 
)


jwt = AuthJWT()


app = FastAPI(docs_url="/admin", redoc_url=None, openapi_url="/admin/openapi")
app.mount("/assets", StaticFiles(directory="../frontend/dist/assets",html=True), name="assets")


templates = Jinja2Templates(directory='../frontend/dist')


target_metadata = metadata

metadata.create_all(bind=engine)


@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=form_data.username)
    if not db_user:
        raise HTTPException(status_code=400, detail="Incorrect email")
    if not verify_password(form_data.password, db_user.password):
        raise HTTPException(status_code=400, detail="Incorrect password")
    access_token = jwt.create_access_token(subject=db_user.id, expires_time=timedelta(minutes=20))
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/")
@app.get("/aktualnosci")
@app.get("/kontakt")
@app.get("/autyzm")
@app.get("/autyzm/definicja")
@app.get("/autyzm/objawy")
@app.get("/autyzm/wystepowanie")
async def urls(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

app.include_router(users_routes.router, prefix="/api", tags=["users"])
app.include_router(news_routes.router, prefix="/api", tags=["news"])
app.include_router(places_routes.router, prefix="/api", tags=["places"])
app.include_router(events_routes.router, prefix="/api", tags=["events"])
