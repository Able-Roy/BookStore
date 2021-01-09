import React from 'react';

import ProductList from './components/ProductList';

import './ProductListing.css';
const ProductListing = () => {
    return (
        <div className="productListing-wrapper">
            <ProductList/>
        </div>
    );
}

export default ProductListing;