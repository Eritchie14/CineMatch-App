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
        return response.get("results", [])
    
    def get_now_playing_movies(self):
        url = "https://api.themoviedb.org/3/movie/now_playing"

        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text)
        return response.get("results", [])
    
    def get_popular_movies(self):
        url = url = (
                    "https://api.themoviedb.org/3/discover/movie"
                    "?sort_by=popularity.desc"
                    "&vote_count.gte=500"
                    "&include_adult=false"
                    "&language=en-US"
                    "&with_original_language=en"
                    "&page=1"
                )
        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text)
        return response.get("results", [])
    
    def get_classic_movies(self):
        url = (
                "https://api.themoviedb.org/3/discover/movie"
                "?release_date.gte=1980-01-01"
                "&release_date.lte=2011-12-31"
                "&vote_count.gte=1500"
                "&vote_average.gte=8.0"
                "&vote_average.lte=10.0"
                "&sort_by=vote_average.desc"
                "&include_adult=false"
                "&language=en-US"
                "&page=2"
            )
        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text)
        return response.get("results", [])
    
    def get_movie_cast_and_crew(self, movie_id):
        url = f"https://api.themoviedb.org/3/movie/{movie_id}/credits"
        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text) 
        top_cast = [
        {
            "name": actor["name"],
            "role": actor["character"]
        }
        for actor in response["cast"][:3]
        ]
        director_data = next(
            (crew for crew in response["crew"] if crew["job"] == "Director"),
            None
        )
        director = (
            {
                "name": director_data["name"]
            }
            if director_data
            else None
        )
        return {
            "cast": top_cast,
            "director": director
        }
    
    def get_genres(self):
        url = "https://api.themoviedb.org/3/genre/movie/list"
        response = requests.get(url, headers=self.headers)
        response = json.loads(response.text)
        return response.get("genres", [])