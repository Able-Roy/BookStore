import React, { useState } from "react";

import StarRating from "../shared/components/UIElements/starRating/starRating";
import "./ProductDetail.css";
const ProductDetail = (props) => {
  
  // Star rating state
  const [rating, setRating] = useState(3);

  // star rating action commented. we dont want to change the rating, we only want to display the rating here.
  const handleStarRatingChange = (value) => {
    //disabled for product data
    //setRating(value);
  };
  return (
    <div className="product-detail-wrapper">
      <div className="product-preview">
        <div className="product-thumbnail">
          <img src="https://source.unsplash.com/random" alt="" />
          <img src="https://source.unsplash.com/random" alt="" />
          <img src="https://source.unsplash.com/random" alt="" />
          <img src="https://source.unsplash.com/random" alt="" />
          <img src="https://source.unsplash.com/random" alt="" />
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="product-preview-image">
          <img src="https://source.unsplash.com/random" alt="" />
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
        <div className="product-ratings">
          <div className="product-ratings__stars">
            <StarRating
              count={5}
              size={16}
              value={rating}
              activeColor={"red"}
              inactiveColor={"#ddd"}
              onChange={handleStarRatingChange}
            />
          </div>
          <div className="product-ratings__count">
            <span>100</span>
            <span>Rating</span>
          </div>
          <div className="product-ratings__unit-sold">
            {" "}
            <span>500</span>
            <span>Sold</span>
          </div>
        </div>
        <span className="product-price">$50</span>
        <div className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus
          et malesuada fames ac turpis egestas maecenas. Quis eleifend quam
          adipiscing vitae proin sagittis nisl. Amet consectetur adipiscing elit
          duis tristique sollicitudin. Risus quis varius quam quisque id diam
          vel quam elementum. Sapien eget mi proin sed libero enim sed. Auctor
          urna nunc id cursus. Eget duis at tellus at urna condimentum mattis.
          Dictum at tempor commodo ullamcorper a lacus vestibulum. Consequat
          semper viverra nam libero justo laoreet sit amet. Amet consectetur
          adipiscing elit duis. Feugiat in fermentum posuere urna nec. Urna
          cursus eget nunc scelerisque viverra mauris in. Eget nunc lobortis
          mattis aliquam faucibus purus in. Massa enim nec dui nunc. Arcu ac
          tortor dignissim convallis aenean et tortor at. Tincidunt arcu non
          sodales neque sodales ut etiam sit amet. Nec dui nunc mattis enim ut.
          Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper
          morbi. Urna condimentum mattis pellentesque id nibh tortor id. Blandit
          massa enim nec dui. Urna molestie at elementum eu. Tellus pellentesque
          eu tincidunt tortor aliquam nulla facilisi cras fermentum. Pretium
          lectus quam id leo in vitae turpis.
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
