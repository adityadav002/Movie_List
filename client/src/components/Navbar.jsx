import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/NavbarStyle.css";
import axios from "axios";
import { BiSolidMovie } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // ✅ use context
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

  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      console.log("Logout successful");
      logout(); // ✅ context logout
      navigate("/home");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to={user ? "/" : "/home"}>
            <BiSolidMovie className="logo_react" />
            <span className="logo_text">MovieDB</span>
          </Link>
        </div>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {!user && (
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          )}

          {user && (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)}>Movies</Link>
              <Link to="/favourite" onClick={() => setMenuOpen(false)}>Favourite</Link>
              <Link to="/watchList" onClick={() => setMenuOpen(false)}>Watch List</Link>
              <Link to="/addmovies" onClick={() => setMenuOpen(false)}>Edit</Link>
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </>
          )}
        </div>

        {user && (
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="navbar-search"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
