import "./SHop.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Product(props) {
  const { id, productName, author, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(Context);
  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img className="product-img" alt="book-cover" src={productImage} />
      <div className="product-details">
        <p className="book-detail">{productName}</p>
        <p className="book-author">Author: {author}</p>
        <p className="book-price">Price: ${price}</p>
      </div>
      <button className="add-btn" onClick={() => addToCart(id)}>
        Add to cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
}
