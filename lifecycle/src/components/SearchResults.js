import React, { useState, useEffect } from "react";
import User from "./User";

const SearchResults = ({ searchTerm, searchFor }) => {
  // fetch url -----------------------------------------------
  const url = "https://jsonplaceholder.typicode.com/users";

  // state hook -----------------------------------------------
  const [users, setUsers] = useState([]);

  // functions -----------------------------------------------
  const userData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  const searchNameOrEmail = () => {
    const searchUser = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchFor) ||
        user.email.toLowerCase().includes(searchFor) ||
        user.id.toString().includes(searchFor)
    );
    setUsers(searchUser);
  };

  // useEffect hook -----------------------------------------------
  useEffect(() => {
    userData();
    console.log(`The SearchResult-component has mounted.`);
  }, []);

  useEffect(() => {
    userData();
  }, [searchTerm]);

  useEffect(() => {
    searchNameOrEmail();
  }, [searchFor]);

  useEffect(() => {
    return () => {
      console.log(`The SearchResult-component has unmounted.`);
    };
  }, []);

  // rendering -----------------------------------------------
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SearchResults;
