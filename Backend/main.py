from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.api_service import ApiService
from services.tmdb_service import TMDBService
from dotenv import load_dotenv

# loads env variables in .env
load_dotenv()

# initialize services
api_service = ApiService()
tmdb_service = TMDBService()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/test")
async def test():
    return {"message": "Test endpoint"}

@app.get("/movies/sam")
async def get_sam_movies():
    return tmdb_service.get_sam_movies()