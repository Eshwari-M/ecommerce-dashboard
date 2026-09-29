import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../utils/mockData';

const ProductList = ({ products, onAddToCart }) => {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('name');

    const filteredProducts = products.filter(product => {
        if (selectedCategory === 'All') {
            return true;
        }

        return product.category === selectedCategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') {
            return a.price - b.price;
        }

        if (sortBy === 'price-high') {
            return b.price - a.price;
        }

        if (sortBy === 'rating') {
            return b.rating - a.rating;
        }

        return a.name.localeCompare(b.name);
    });

    return (
        <div id="products"className="container mt-4">

            <h2>Products</h2>
            <p>Browse our available products</p>

            <div className="row mb-4">

                <div className="col-md-6">
                    <label className="form-label">Category</label>

                    <select
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {CATEGORIES.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Sort By</label>

                    <select
                        className="form-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="name">Name</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>

            </div>

            <p>Showing {sortedProducts.length} products</p>

            <div className="row">

                {sortedProducts.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <ProductCard
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    </div>
                ))}

            </div>

        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ProductList;