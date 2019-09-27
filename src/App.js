import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from "axios";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchType, setSearchType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [data, setData] = useState([]);

  const onSearch = async e => {
    e.preventDefault();
    try {
      const newData = await axios.get("http://www.omdbapi.com", {
        params: {
          apikey: "d93bd1eb",
          s: searchText,
          y: searchYear,
          type: searchType
        }
      });
      setData(newData.data.Search || []);
    } catch (err) {
      console.log("error :", err);
    }
  };

  return (
    <Router>
      <div>
        <form onSubmit={onSearch}>
          <input
            required
            placeholder="search field"
            values={searchText}
            onChange={e => setSearchText(e.target.value)}
          ></input>
          <select name="type" onChange={e => setSearchType(e.target.value)}>
            <option value="">-- type --</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
          <input placeholder="year" values={searchYear} onChange={e => setSearchYear(e.target.value)}></input>
          <button>search</button>
        </form>

        {data.length > 0 &&
          data.map((movie, index) => {
            return (
              <div key={index}>
                <h1>Title: {movie.Title}</h1>
                <Link onClick={() => setSelectedId(movie.imdbID)} to="/details">
                  <button>Details</button>
                </Link>
                <h1>Year: {movie.Year}</h1>
                <h1>imdb ID: {movie.imdbID}</h1>
                <h1>Type: {movie.Type}</h1>
                <img alt={movie.Title} src={movie.Poster}></img>
              </div>
            );
          })}
      </div>

      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/details" render={props => <Details {...props} spec={selectedId} />} />
    </Router>
  );
};

const Details = ({ spec }) => {
  useEffect(async () => {
    try {
      const details = await axios.get("http://www.omdbapi.com", {
        params: {
          apikey: "d93bd1eb",
          i: searchText,
          plot: full
        }
      });
    } catch (err) {
      console.log("error :", err);
    }
  }, []);
  console.log(spec);
  return <div>hello</div>;
};

export default App;
