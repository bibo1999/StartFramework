import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100 py-3 px-4" style={{ backgroundColor: "#2c3e50", zIndex: 3 }}>
      
      <Link to="/home" className="navbar-brand text-white fw-bold ms-3">
        Start Framework
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Menu */}
      <div className="collapse navbar-collapse justify-content-end" id="mainNav">
        <ul className="navbar-nav me-3">
          
          <li className="nav-item mx-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-white fw-semibold px-3 py-2 rounded activ-link"
                  : "nav-link text-white fw-semibold"
              }
            >
              About
            </NavLink>
          </li>

          <li className="nav-item mx-2">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-white fw-semibold px-3 py-2 rounded activ-link"
                  : "nav-link text-white fw-semibold"
              }
            >
              Portfolio
            </NavLink>
          </li>

          <li className="nav-item mx-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-white fw-semibold px-3 py-2 rounded activ-link"
                  : "nav-link text-white fw-semibold"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}
