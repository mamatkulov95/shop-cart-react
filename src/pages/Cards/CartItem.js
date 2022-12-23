import React, { useContext } from "react";
import "../Shop/SHop.css";
import { Context } from "../../context/Context";
export default function CartItem(props) {
  const { id, productName, author, price, productImage } = props.data;
  const { deleteCart, cartItems } = useContext(Context);

  const ordered = cartItems[id];
  return (
    <div className="product">
      <img className="product-img" alt="book-cover" src={productImage} />
      <div className="product-details">
        <p className="book-detail">{productName}</p>
        <p className="book-author">Author: {author}</p>
        <p className="book-price">Price: ${price}</p>
      </div>
      <div className="btn-wrapper">
        <button className="add-btn" onClick={() => deleteCart(id)}>
          Delete order
        </button>
        <button className="add-btn">Quantity: {ordered}</button>
      </div>
    </div>
  );
}
