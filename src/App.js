import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <input required placeholder="search field"></input>
      <select>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
      <input placeholder="year"></input>
      <button>search</button>
    </div>
  );
};

export default App;
