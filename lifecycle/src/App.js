import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import SearchResults from "./components/SearchResults";
import About from "./components/About";
import "./App.scss";

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
      <Form searchBtn={searchBtn} searchBox={searchBox} />
      {currentPage === "search" ? (
        <SearchResults
          searchFor={lastSearchTerm.toLowerCase()}
          searchTerm={searchTerm}
        />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;
