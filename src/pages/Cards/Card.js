import React, { useContext } from "react";
import CartItem from "./CartItem";
import { PRODUCTS } from "../../products";
import { Context } from "../../context/Context";
import "../Shop/SHop.css";

export default function Card() {
  const { cartItems } = useContext(Context);

  return (
    <div className="cart">
      <div>
        <h1 className="cart-title">Your Cart Items</h1>
      </div>
      <div className="shop">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
}
