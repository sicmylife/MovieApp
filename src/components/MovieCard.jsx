import styles from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link style={{ textDecoration: 'none' }} to={"/movies/" + movie.id}>
        <img
          className={styles.movieImage}
          width={250}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.movieTitle}>{movie.title}</div>
      </Link>
    </li>
  );
}
