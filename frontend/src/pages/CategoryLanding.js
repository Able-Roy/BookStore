import React, { useState, useEffect } from "react";

import "./CategoryLanding.css";

const CATEGORIES = [
  {
    categoryId: 1,
    name: "category1",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 2,
    name: "category2",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 3,
    name: "category3",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 4,
    name: "category4",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 5,
    name: "category5",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 6,
    name: "category6",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 7,
    name: "category7",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 8,
    name: "category8",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    categoryId: 9,
    name: "category9",
    imageUrl: "https://source.unsplash.com/random",
  },
];

const CategoryLanding = () => {
  //category state
  const [categories, setCategory] = useState();

  //api call to fetch categories
  useEffect(() => {
    fetch("http://localhost:5000/api/categories/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        if (res.ok) {
         return res.json();
          console.log(res);
        } else {
          throw new Error("unable to fetch data");
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="category-wrapper">
      {CATEGORIES.map((category) => {
        return (
          <div className="category-container" id={category.categoryId}>
            <h1>{category.name}</h1>
            <img src={category.imageUrl} alt={category.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryLanding;
