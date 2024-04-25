from starlette.middleware.cors import CORSMiddleware

from src.router import router as router

from fastapi import FastAPI

from src.config import settings
from src.http_client import cryptoHTTPclient

app = FastAPI()
app.include_router(router)


origins = [
    'http://127.0.0.1:5173',
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


