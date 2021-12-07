import React from "react";
import ch from "./image/check3.jpeg";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img className="checkout_ad" src={ch} alt="" />

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title"> Your shopping cart</h2>
            {basket.map((item) => {
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="checkout_right">
          <SubTotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
