import React, { useState } from "react";
import axios from "axios";

//omd api key --> d93bd1eb

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchYear, setSearchYear] = useState("");

  const onSearch = async () => {
    try {
      const data = await axios.get("http://www.omdbapi.com", {
        params: {
          apikey: "d93bd1eb",
          t: searchText,
          y: searchYear
        }
      });
      console.log(data);
    } catch (err) {
      console.log("error :", err);
    }
  };

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
