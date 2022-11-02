import { Link } from "react-router-dom";
import { UserContext } from "./UserContexts";
import { React, useContext } from "react";


const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <>
     
     <section className="user-name-container">
     <p className="username">Logged in: {username}</p>
      </section>
    <header className="header">
    <title>Northcoders</title>
      <Link to="/" className="title" id="title">
        <h1>Northcoders</h1>
      </Link>
    </header>
    </>
  );
};

export default Header