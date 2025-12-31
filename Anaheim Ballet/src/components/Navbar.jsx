import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/anaheim-logo.jpeg";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo Section (redirects to Home) */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Anaheim Ballet Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="navbar-links">
        <NavLink to="/ab-company">AB Company</NavLink>
        <NavLink to="/ab-school">AB School</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
