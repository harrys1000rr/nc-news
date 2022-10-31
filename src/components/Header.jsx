import { Link } from "react-router-dom";
import { UserContext } from "./UserContexts";
import { React, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <header className="header">
      <Link to="/" className="title" id="title">
        <h1>Bloomberg</h1>
      </Link>
      <Link to="/AllArticles"> All</Link> |
      <section className="user-name-icon-container">
        <div className="user-icon">
          <FaUserCircle />
        </div>
        <p>{username}</p>
      </section>
    </header>
  );
};

export default Header