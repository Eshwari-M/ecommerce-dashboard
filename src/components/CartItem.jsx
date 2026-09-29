import React from 'react';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
    return (
        <div className="border rounded p-3 mb-3">

            <div className="row align-items-center">

                <div className="col-md-5">
                    <h5>{item.name}</h5>
                    <p className="mb-0">Price: ${item.price}</p>
                </div>

                <div className="col-md-4">

                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => onDecrease(item.id)}
                    >
                        -
                    </button>

                    <span className="mx-3">
                        {item.quantity}
                    </span>

                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => onIncrease(item.id)}
                    >
                        +
                    </button>

                </div>

                <div className="col-md-3">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onRemove(item.id)}
                    >
                        Remove
                    </button>
                </div>

            </div>

        </div>
    );
};

export default CartItem;