import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div className="movie-year">
        <p>{movie.Year}</p>
      </div>
      <div className="movie-img">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie-details">
        <span>{movie.Type}</span>
        <h2>{movie.Title}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
