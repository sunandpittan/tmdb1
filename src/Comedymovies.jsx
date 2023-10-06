import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Comedymovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=9948beaa1978b07ef733bcbe5e8d2849&with_networks=213"
      )
      .then((display) => {
        setMovies(display.data.results);
        console.log(display.data.results);
      });
  }, []);

  const navigate = useNavigate();

  const mView = (event, movie) => {
    event.preventDefault();
    navigate("/view", { state: { movie } });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="text-dark mt-2 mb-2">Comedy Movies</h1>
        {movies.map((m) => (
          <div
            className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-2 mb-2"
            key={m.id}
          >
            <div
              className="card h-100 border-0 shadow mcard"
              onClick={(event) => mView(event, m)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                className="card-img-top"
                alt={m.name}
              />
              <div className="card-body">
                <p className="card-text">&#11088; {m.vote_average}</p>
                <h5 className="card-title">{m.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comedymovies;
