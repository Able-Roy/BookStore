import React from 'react';

import ProductList from './components/ProductList';
import ProductFilter from './components/ProductFilter';

import './ProductListing.css';
const ProductListing = () => {
    return (
        <div className="productListing-wrapper">
            <ProductFilter/>
            <ProductList/>
        </div>
    );
}

export default ProductListing;