import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [data, setData] = useState([]);

  const onSearch = async e => {
    e.preventDefault();
    try {
      const newData = await axios.get("http://www.omdbapi.com", {
        params: {
          apikey: "d93bd1eb",
          s: searchText,
          y: searchYear
        }
      });
      console.log(newData.data.Search);
      setData(newData.data.Search);
    } catch (err) {
      console.log("error :", err);
    }
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          required
          placeholder="search field"
          values={searchText}
          onChange={e => setSearchText(e.target.value)}
        ></input>
        <select name="type">
          <option value="">-- type --</option>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
        <input placeholder="year" values={searchYear} onChange={e => setSearchYear(e.target.value)}></input>
        <button>search</button>
      </form>

      {data.length > 0 &&
        data.map(movie => {
          return (
            <div key={movie.imdbID}>
              <h1>{movie.Title}</h1>
              <h1>{movie.Year}</h1>
              <h1>{movie.imdbID}</h1>
              <h1>{movie.Type}</h1>
              <img alt={movie.Title} src={movie.Poster}></img>
            </div>
          );
        })}
    </div>
  );
};

export default App;
