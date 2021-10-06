import React from "react";

const Header = ({ navigationHandler }) => {
  return (
    <section className="header">
      <h1>UserSearch</h1>
      <nav>
        <span onClick={navigationHandler}>Search</span>
        <span>|</span>
        <span onClick={navigationHandler}>About</span>
      </nav>
    </section>
  );
};

export default Header;
