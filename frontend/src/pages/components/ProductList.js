import React from "react";

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
            <h1>{book.name}</h1>
            <img src={book.imageUrl} alt={book.name}></img>
            <h3>{book.author}</h3>
            <span>{book.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
