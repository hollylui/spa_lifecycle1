import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import About from "./components/About";

function App() {
  // state hook ---------------------------------------

  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearchTerm, setLastSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState("search");

  // function ----------------------------------------
  const searchBox = (event) => {
    setSearchTerm(event.target.value.substr(0, 20));
  };

  const searchBtn = (e) => {
    e.preventDefault();
    setLastSearchTerm(searchTerm);
    e.target.previousElementSibling.value = "";
  };

  const navigate = (e) => {
    e.target.innerText.toLowerCase() === "search"
      ? setCurrentPage("search")
      : setCurrentPage("about");
  };

  // rendering -----------------------------------------
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
        <SearchResults searchFor={lastSearchTerm} searchTerm={searchTerm} />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;
