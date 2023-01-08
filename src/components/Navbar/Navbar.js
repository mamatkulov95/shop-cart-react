import { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Navbar.css";
import { Badge } from "@mui/material";

function Navbar() {
  const { getTotalCartAmount } = useContext(Context);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <Badge badgeContent={totalAmount} color="primary">
            <ShoppingCart size={32} />
          </Badge>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
