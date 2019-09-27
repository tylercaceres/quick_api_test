import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchYear, setSearchYear] = useState("");

  onSearch = () => {};

  return (
    <>
      <input
        required
        placeholder="search field"
        values={searchText}
        onChange={e => setSearchText(e.target.value)}
      ></input>
      <select name="type">
        <option selected value="">
          -- type --
        </option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
      <input placeholder="year" values={searchYear} onChange={e => setSearchYear(e.target.value)}></input>
      <button>search</button>

      <div></div>
    </>
  );
};

export default App;
