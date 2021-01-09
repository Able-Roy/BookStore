import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


import Loader from '../shared/components/UIElements/Loader/Loader';

import "./CategoryLanding.css";

const CategoryLanding = () => {
  //category state
  const [categories, setCategory] = useState();

  //loading state
  const [isLoading, setLoading] = useState(true);

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
        } else {
          throw new Error("unable to fetch data");
        }
      })
      .then((data) => {
        console.log(data);
        setCategory(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="category-wrapper">
      {isLoading?<Loader/>:categories.map((category) => {
        return (
          <Link to={`/books/${category.name}`}>
            <div className="category-container" key={category._id}>
              <h1>{category.name}</h1>
              <img src={category.imageUrl} alt={category.name} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryLanding;
