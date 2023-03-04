from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_jwt_auth import AuthJWT
from datetime import timedelta
from starlette.templating import Jinja2Templates

from db.database import get_db, metadata, engine
from security.password import verify_password
from security.auth import Session

from api.users import routes as users_routes, crud
from api.news import routes as news_routes


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
@app.get("/login")
@app.get("/signup")
@app.get("/admin")
async def urls(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

app.include_router(users_routes.router, prefix="/api", tags=["users"])
app.include_router(news_routes.router, prefix="/api", tags=["news"])
