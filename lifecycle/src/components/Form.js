import React from "react";

const Form = ({ searchBox, searchBtn }) => {
  return (
    <form>
      <input className="inputText" type="text" onChange={searchBox} />
      <input
        className="searchBtn"
        type="submit"
        value="Search"
        onClick={searchBtn}
      />
    </form>
  );
};

export default Form;
