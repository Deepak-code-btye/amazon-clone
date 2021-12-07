import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckOutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  // remove the item from product item cart
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <>
      <div className="checkoutproduct">
        <img className="checkoutproduct_image" src={image} alt="" />
        <div className="checkoutproduct_info">
          <p className="checkoutproduct_title">{title}</p>
          <p className="checkoutproduct_price">
            <small>$</small>
            <strong>{price}</strong>
            <div className="checkoutproduct_rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Cart</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckOutProduct;
