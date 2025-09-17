<<<<<<< HEAD
/** @format */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/NavbarStyle.css";

import { BiSolidMovie } from 'react-icons/bi';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
           <BiSolidMovie className="logo_react" />
           <span className="logo_text">MovieDB</span>
          </Link>
        </div>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/favourite" onClick={() => setMenuOpen(false)}>Favourite</Link>
          <Link to="/watchList" onClick={() => setMenuOpen(false)}>Watch List</Link>
          <Link to="/addmovies" onClick={() => setMenuOpen(false)}>Edit Movies</Link>
        </div>

        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          className="navbar-search"
        />
      </div>
    </nav>
  );
}

export default Navbar;
=======
/** @format */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/NavbarStyle.css";

import { BiSolidMovie } from 'react-icons/bi';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
           <BiSolidMovie className="logo_react" />
           <span className="logo_text">MovieDB</span>
          </Link>
        </div>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <a href="#bookmark">Movies</a>
          <Link to="/favourite" onClick={() => setMenuOpen(false)}>Favourite</Link>
          <Link to="/addmovies" onClick={() => setMenuOpen(false)}>Edit Movies</Link>
        </div>

        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          className="navbar-search"
        />
      </div>
    </nav>
  );
}

export default Navbar;
>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
