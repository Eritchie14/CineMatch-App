from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.api_service import ApiService
from services.tmdb_service import TMDBService
#from dotenv import load_dotenv

# loads env variables in .env
#load_dotenv()

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

@app.get("/movies/top-rated")
async def get_top_rated_movies():
    return tmdb_service.get_top_rated_movies()

@app.get("/movies/now-playing")
async def get_now_playing_movies():
    return tmdb_service.get_now_playing_movies()

@app.get("/movies/popular")
async def get_popular_movies():
    return tmdb_service.get_popular_movies()

@app.get("/movies/{movie_id}")
async def get_movie_details(movie_id: int):
    return tmdb_service.get_movie_details(movie_id)

