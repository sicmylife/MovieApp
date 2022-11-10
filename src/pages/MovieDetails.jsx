import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
      console.log(data);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className="detailsContainer">
      <img src={imageUrl} className="movieImage col" alt={movie.title} />
      <div className="movieDetails col">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>

        <p>
          <strong>Genero: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
