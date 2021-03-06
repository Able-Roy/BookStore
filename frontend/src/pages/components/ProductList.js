import React from "react";
import { Link , useLocation} from "react-router-dom";
import NavLinks from "../../shared/components/Navigation/NavLinks";

import "./ProductList.css";
const CURRENCY_CODE = "₹";
const BOOkS = [
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book2",
    name: "book2",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    id: "book1",
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
];
const ProductList = () => {
  
  const location = useLocation();
  return (
    <div className="product-list">
      {BOOkS.map((book) => {
        return (
          <Link to={`${location.pathname}/${book.id}`}>
            <div className="product-list-item">
              <span className="list-item-name">{book.name}</span>
              <img src={book.imageUrl} alt={book.name}></img>
              <span className="list-item-author">{book.author}</span>
              <span className="list-item-price">{`${book.price} ${CURRENCY_CODE}`}</span>
              <button>Add To Cart</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
