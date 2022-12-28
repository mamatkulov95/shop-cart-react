import React from "react";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <p>Shop</p>
        <p>About</p>
        <ShoppingCart size={32} />
      </div>
    </div>
  );
}

export default Navbar;
