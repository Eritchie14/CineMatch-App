import os
import requests
import json

from dotenv import load_dotenv

# loads env variables in .env
load_dotenv()

TMDB_API_READ_TOKEN = os.getenv("TMDB_API_READ_TOKEN")

class TMDBService:
    def __init__(self):
        self.headers =  {
            "accept": "application/json",
            "Authorization": f"Bearer {TMDB_API_READ_TOKEN}"
        }

    def get_sam_movies(self):
        url = "https://api.themoviedb.org/3/search/movie?query=sam"

        response = requests.get(url, headers=self.headers)
        return json.loads(response.text)
    
    def get_movie_details(self, movie_id):
        url = f"https://api.themoviedb.org/3/movie/{movie_id}"

        response = requests.get(url, headers=self.headers)
        return json.loads(response.text)
    
    def get_top_rated_movies(self):
        url = "https://api.themoviedb.org/3/movie/top_rated"

        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text)
        return response.get("results", [])[:10]
    
    def get_now_playing_movies(self):
        url = "https://api.themoviedb.org/3/movie/now_playing"

        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text)
        return response.get("results", [])[:10]
    
    def get_popular_movies(self):
        url = "https://api.themoviedb.org/3/movie/popular"

        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text)
        return response.get("results", [])[:10]