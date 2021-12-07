import React from "react";
import "./Header.css";
import amz from "./image/amazon_PNG11.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase/firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header_logo" src={amz} alt="logo" />
        </Link>

        <div className="header_search">
          <input className="header_SearchInput" type="text" />
          <SearchIcon className="header_SearchIcon" />
        </div>

        <div className="header_nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionOneLine">
                Hello{!user ? "Guest" : user.email}
              </span>
              <span className="header_optionTwoLine">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <div className="header_option">
            <span className="header_optionOneLine">Returns</span>
            <span className="header_optionTwoLine">Order</span>
          </div>
          <div className="header_option">
            <span className="header_optionOneLine">Your</span>
            <span className="header_optionTwoLine">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header_optionbasket">
              <ShoppingCartIcon />
              <span
                className="header_optionTwoLine
                header_basketCount"
              >
                {/* item add to in cart */}
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
