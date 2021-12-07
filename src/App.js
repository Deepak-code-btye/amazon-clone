import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase/firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./loginpage/Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

const promise = loadStripe();

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // the user just logged i /the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/checkout" element={<Checkout />} />
        {/*  */}
        <Route
          exact
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        {/*  */}
      </Routes>
    </>
  );
}

export default App;
