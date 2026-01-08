import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
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
        </ul>
      </div>
    </nav>
  );
}
