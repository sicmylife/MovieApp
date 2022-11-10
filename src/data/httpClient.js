const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDJkYzU4ZWYzOWEyYjRiYTdjMmQ2ZTBmYWIzMTgzOSIsInN1YiI6IjYzNjU1NTE3ZDhkMzI5MDA3ZmIyMDRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NBsHyu1MymMdSk6cURXq8Hn5RohKWtJzxrszHeJG_ws",
      "Content-Type": "application/json;charset=utf-8"
    }
  }).then((result) => result.json());
}
