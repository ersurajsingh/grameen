import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    
    <div className="home">
      <div className="home_container">
        {/* Home Image */}
        <img
        className="home_image"
        src="https://github.com/ersurajsingh/grameen/blob/main/grameenstore/assets/fields.jpeg?raw=true"
        alt="Grameen Logo"
      />

        <div className="home_row">
          <Product 
          id="11111"
          title="Bamboo Baskets for Fruits | Vegetable | Chapati | Rice | Flowers | Dining Table Basket | Wedding Rituals. Home | Wall decoration | Multi uses. 12 Diameter"
          price={399}
          image="https://m.media-amazon.com/images/I/7103yxpdLVL._SL1100_.jpg"
          rating={5}
          />
          <Product 
          id="22222"
          title="AGRADA - Framed Painting of Rural Art on Walls for Home, Office Wall Decor in Home Decorative Gift Item Digital Reprint Painting "
          price={233}
          image="https://m.media-amazon.com/images/I/911px7qWZ8L._SL1500_.jpg"
          rating={4}
          />
          {/* Add more Product components */}
        </div>

        <div className="home_row">
          {/* Add more Product components */}
          {/* Add more Product components */}
          {/* Add more Product components */}
        </div>

        <div className="home_row">
          {/* Add more Product components */}
        </div>
      </div>
    </div>
  );
}

export default Home;
