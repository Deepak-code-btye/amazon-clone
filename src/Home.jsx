import React from "react";
import "./Home.css";
import amz1 from "./image/prime.jpg";
import amz2 from "./image/the lean.jpg";
import amz3 from "./image/machine.jpeg";
import amz4 from "./image/smartphone.jpg";
import amz5 from "./image/helmate.jpeg";
import amz6 from "./image/laptop.jpeg";
import amz7 from "./image/smarttv.jpeg";

import Product from "./Product";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img className="header_image" src={amz1} alt="" />

          <div className="home_row">
            <Product
              id="1234567"
              title="the lean startup"
              price={20.99}
              image={amz2}
              rating={5}
            />
            <Product
              id="1235667"
              title="the colth machine"
              price={55.23}
              image={amz3}
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="12378867"
              title="the colth machine"
              price={70.23}
              image={amz4}
              rating={4}
            />
            <Product
              id="34567890"
              title="sport helmate"
              price={20.44}
              image={amz5}
              rating={4}
            />
            <Product
              id="34597890"
              title="microsoft windows 10 operating system"
              price={90.44}
              image={amz6}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="34457890"
              title="microsoft windows 10 operating system"
              price={40.44}
              image={amz7}
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
