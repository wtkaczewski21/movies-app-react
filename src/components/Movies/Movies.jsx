import React, { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import "./Movies.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5ab4303";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Movies Collection</h1>
      </div>
      <div className="search">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
    </div>
  );
}

export default Movies;
