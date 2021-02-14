import React from "react";

import "./ProductDetail.css";
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
          <div className="fav-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="_1l0elc"
              width="16"
              height="16"
              viewBox="0 0 20 16"
            >
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                fill="#2874F0"
                className="eX72wL"
                stroke="#FFF"
                fill-rule="evenodd"
                opacity=".9"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="product-details">
        <span className="product-name">Product Name</span>
        <span className="product-price">$50</span>
        <div className>
          Estimated Delivery Timelines: 4-6 Days in Dubai 5-7 Days in Rest of
          UAE 9-11 Days in GCC 11-13 Days for International Locations ** All
          timeframes given exclude Fridays and any applicable public holidays.
        </div>
        <div className="product-ratings">
          <div className="product-ratings__rating">5</div>
          <div className="product-ratings__stars">*****</div>
          <div className="product-ratings__count">100</div>
          <div className="product-ratings__unit-sold">500</div>
        </div>
      </div>
      <div className="action-buttons">
        <button className="action-buttons__cart">Add To Cart</button>
        <button className="action-buttons__buy">Add To Wishlist</button>
      </div>
    </div>
  );
};
export default ProductDetail;
