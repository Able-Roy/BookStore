import React from "react";
import { uuid } from "uuidv4";

import './ProductFilter.css';
const PRODUCT_FILTER = {
  p1: ["filter1", "filter2", "filter3"],
  p2: ["filter1", "filter2", "filter3"],
  p3: ["filter1", "filter2", "filter3"],
  p4: ["filter1", "filter2", "filter3"],
  p5: ["filter1", "filter2", "filter3"],
};

/*
  function to create html of filter section
*/
const getFilters = (filters) => {
  let content = [];
  for (let filter in filters) {
    content.push(<div className="header">{filter}</div>);
    for (let item in filters[filter]) {
      console.log(filters[filter][item]);
      let key = uuid();
      content.push(
        <React.Fragment>
          <input type="checkbox" className="filer-checkbox" value={filters[filter][item]} id={key} key={key} />
          <label for={key} className="filter-name" key={key}>
            {filters[filter][item]}
          </label>
        </React.Fragment>
      );
    }
  }
  return content;
};
//product list was added
const ProductFilter = () => {
  return (
    <div className="filter-wrapper">
      <div className="filter-title">Filters</div>
      {getFilters(PRODUCT_FILTER)}
    </div>
  );
};

export default ProductFilter;
