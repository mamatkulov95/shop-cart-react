import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <p>About</p>
        <ShoppingCart size={32} />
      </div>
    </div>
  );
}

export default Navbar;
