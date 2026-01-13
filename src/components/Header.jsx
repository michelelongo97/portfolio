import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 mb-4">
      <NavLink className="navbar-brand" to="/">
        MyPortfolio <span>Michele Longo</span>
      </NavLink>

      {/* HAMBURGER */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* MENU */}
      <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
        <ul className="navbar-nav ms-auto gap-3 align-items-lg-center">
          <li>
            <NavLink onClick={() => setOpen(false)} className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className="nav-link"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button
              className="btn btn-sm btn-outline-light"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
