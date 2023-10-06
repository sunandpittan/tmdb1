import React from "react";

function Navbar1() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <strong>TMDB</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="/">
                <button className="btn btn-sm btn-light">Home</button>
              </a>
              <a className="nav-link" href="/comedy">
                <button className="btn btn-sm btn-light">Comedy</button>
              </a>
              <a className="nav-link" href="/popular">
                <button className="btn btn-sm btn-light">Popular</button>
              </a>
              <a className="nav-link" href="/latest">
                <button className="btn btn-sm btn-light">Latest</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
