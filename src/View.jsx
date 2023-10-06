import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function View() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state.movie;
  return (
    <div>
      <div className="card mt-2 mb-2 w-75 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className="img-fluid rounded h-100"
              alt={movie.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">
                {movie.name}
                {movie.title}
              </h1>
              <p className="card-text">{movie.overview}</p>
              <p className="card-text">Rating: {movie.vote_average}</p>
              <p className="card-text">Votes: {movie.vote_count}</p>
              <p className="card-text">Popularity: {movie.popularity}</p>
              <p className="card-text">
                Release: {movie.first_air_date}
                {movie.release_date}
              </p>
              <p className="card-text">Language: {movie.original_language}</p>
              <button
                type="button"
                className="btn btn-dark float-end my-auto"
                onClick={() => navigate(-1)}
              >
                &#129128; Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
