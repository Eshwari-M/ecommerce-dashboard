import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease }) => {

    let total = 0;

    cartItems.forEach(item => {
        total = total + (item.price * item.quantity);
    });

    return (
        <div id="cart"className="container mt-5 mb-5">

            <div className="card shadow-sm">
                <div className="card-body">

                    <h2 className="mb-4">Shopping Cart</h2>

                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onRemove={onRemove}
                                    onIncrease={onIncrease}
                                    onDecrease={onDecrease}
                                />
                            ))}

                            <hr />

                            <h4>Total: ${total.toFixed(2)}</h4>
                        </>
                    )}

                </div>
            </div>

        </div>
    );
};

export default Cart;