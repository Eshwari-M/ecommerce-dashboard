import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderDetails = {
            name: name,
            email: email,
            address: address
        };

        onSubmit(orderDetails);
    };

    return (
        <div id="checkout"className="container mb-5">

            <div className="card shadow-sm">
                <div className="card-body">

                    <h2 className="mb-4">Checkout</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-success">
                            Place Order
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default CheckoutForm;