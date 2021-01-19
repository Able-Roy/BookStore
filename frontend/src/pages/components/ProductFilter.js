import React from "react";

const PRODUCT_FILTER = {
  p1: ["filter1", "filter2", "filter3"],
  p2: ["filter1", "filter2", "filter3"],
  p3: ["filter1", "filter2", "filter3"],
  p4: ["filter1", "filter2", "filter3"],
  p5: ["filter1", "filter2", "filter3"],
};

const getFilters = (filters) => {
    let content = [];
  for (let filter in filters) {
    content.push(
      <div className="header">{filter}</div>
  );
    for (let item in filters[filter]) {
        console.log(filters[filter][item]);
        content.push(
          <input type="checkbox" value={filters[filter][item]}/>
      );
    }
  }

  return content;
};
//product list was added
const ProductFilter = () => {
  return <div className="filter-wrapper">{getFilters(PRODUCT_FILTER)}</div>;
};

export default ProductFilter;
