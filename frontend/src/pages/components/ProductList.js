import React from "react";

import './ProductList.css';
const CURRENCY_CODE = '₹';
const BOOkS = [
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
  {
    name: "book1",
    imageUrl: "https://source.unsplash.com/random",
    author: "author1",
    price: "150",
  },
];
const ProductList = () => {
  return (
    <div className="product-list">
      {BOOkS.map((book) => {
        return (
          <div className="product-list-item">
            <span className="list-item-name">{book.name}</span>
            <img src={book.imageUrl} alt={book.name}></img>
            <span className="list-item-author">{book.author}</span>
            <span className="list-item-price">{`${book.price} ${CURRENCY_CODE}`}</span>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
