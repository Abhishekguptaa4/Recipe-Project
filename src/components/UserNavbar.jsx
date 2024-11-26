import React from "react";
import { Link } from "react-router-dom";
import "./../styles/global.css";
import "./../styles/Navbar.css";

const UserNavbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>Recipe Hub</h1>
      </div>
      <nav className="navbar-links">
        <Link to="/recipes" className="nav-link">Recipes</Link>
        <Link to="/ask-ai" className="nav-link">Ask AI</Link>
        <a href="#footer" className="nav-link">About</a>
      </nav>
    </header>
  );
};

export default UserNavbar;
