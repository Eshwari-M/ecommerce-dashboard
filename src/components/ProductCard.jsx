import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart }) => {

    return (
        <div className="card h-100">

            <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
            />

            <div className="card-body">

                <h4 className="card-title">{product.name}</h4>

                <p>₹{product.price}</p>

                <p className="card-text">
                    {product.description}
                </p>

                <p className="text-warning">
                    ⭐ {product.rating}
                </p>

                <button
                    className="btn btn-success"
                    onClick={() => onAddToCart(product)}
                >
                    Add to Cart
                </button>

            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ProductCard;