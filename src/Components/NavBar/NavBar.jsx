import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ toggleTheme, theme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "home";

  const links = [
    { id: "home", text: "Home", path: "/" },
    { id: "aboutMe", text: "About me", path: "/aboutMe" },
    { id: "education", text: "Education", path: "/education" },
    { id: "projects", text: "Projects", path: "/projects" },
    { id: "contact", text: "Contact", path: "/contact" },
  ];

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <nav
      className="navbar"
      style={{
        "--navbar-bg": theme == "light" ? "#ffffff" : "#000000",
        "--navbar-text": theme == "light" ? "#000000" : "#ffffff",
      }}
    >
      <Link to="/" className="navbar_logo">
        Roaa
      </Link>

      <ul className="navbar_links">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              className={currentPath == link.id ? "active" : ""}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="navbar_menu-btn"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="theme-toggle-btn"
      >
        <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
      </button>
      <div
        className={`sidebar ${isSidebarOpen ? "show" : ""}`}
        style={{
          backgroundColor: theme == "light" ? "#ffffff" : "#1a1a1a",
          color: theme == "light" ? "#000" : "#fff",
        }}
      >
        <button className="sidebar_close-btn" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <ul className="sidebar_links">
          {links.map((link) => (
            <li key={link.id} onClick={closeSidebar}>
              <Link
                to={link.path}
                className={currentPath == link.id ? "active" : ""}
                style={{
                  color: theme == "light" ? "#000" : "#fff",
                }}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar} />}
    </nav>
  );
};

export default Navbar;
