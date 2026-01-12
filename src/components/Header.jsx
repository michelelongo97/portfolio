import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 mb-4">
      <NavLink className="navbar-brand" to="/">
        MyPortfolio
      </NavLink>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav ms-auto gap-3">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
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
