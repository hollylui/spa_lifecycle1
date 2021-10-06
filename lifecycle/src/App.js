import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import About from "./components/About";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearchTerm, setLastSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState("search");

  const searchBox = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchBtn = (e) => {
    e.preventDefault();
    setLastSearchTerm(searchTerm);
  };

  const navigate = (e) => {
    e.target.innerText.toLowerCase() === "search"
      ? setCurrentPage("search")
      : setCurrentPage("about");
  };

  return (
    <div className="userSearch">
      <Header navigationHandler={navigate} />
      <form>
        <input className="inputText" type="text" onChange={searchBox} />
        <input
          className="searchBtn"
          type="submit"
          value="Search"
          onClick={searchBtn}
        />
      </form>
      {currentPage === "search" ? (
        <SearchResults searchFor={lastSearchTerm} />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;
