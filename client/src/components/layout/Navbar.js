import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
export const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fas fa-id-card-alt">Contact Keeper</i>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};
// Navbar.PropTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string
// };

// Navbar.defaultProps = {
//   title: "Contact Keeper",
//   icon: "fas fa-id-card-alt"
// };
