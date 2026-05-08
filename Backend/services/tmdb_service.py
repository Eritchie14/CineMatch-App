import os
import requests
import json

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