import React from "react";

import './ProductDetail.css';
const ProductDetail = (props) => {
  return (
    <div className="product-detail-wrapper">
      <div className="product-preview">
        <div className="product-thumbnail">
          <img src="https://source.unsplash.com/random" alt="slider image" />
          <img src="https://source.unsplash.com/random" alt="slider image" />
          <img src="https://source.unsplash.com/random" alt="slider image" />
          <img src="https://source.unsplash.com/random" alt="slider image" />
          <img src="https://source.unsplash.com/random" alt="slider image" />
          <img src="https://source.unsplash.com/random" alt="slider image" />
        </div>
        <div className="product-preview-image">
          <img src="https://source.unsplash.com/random" alt="slider image" />
        </div>
        <div className="action-buttons">
          <button className="cart">Add To Cart</button>
          <button className="cart">Buy Now</button>
        </div>
      </div>
      <div className="product-details">
        <span>Product Name</span>
      </div>
    </div>
  );
};
export default ProductDetail;
