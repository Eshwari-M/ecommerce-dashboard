import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import ErrorBoundary from './components/ErrorBoundary';
import { PRODUCTS } from './utils/mockData';

function App() {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        let found = false;

        cartItems.forEach(item => {
            if (item.id === product.id) {
                found = true;
            }
        });

        if (found) {
            const updatedCart = cartItems.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });

            setCartItems(updatedCart);
        } else {
            const newProduct = {
                ...product,
                quantity: 1
            };

            setCartItems([...cartItems, newProduct]);
        }
    };

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });

        setCartItems(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });

        setCartItems(updatedCart);
    };

    const handleCheckout = (orderDetails) => {
        console.log("Order Details:", orderDetails);
        alert("Order placed successfully!");
        setCartItems([]);
    };

    return (
        <ErrorBoundary>
            <div className="App">

                <h1>The Sweet Cravings Store</h1>
                <nav className="navbar navbar-expand-lg bg-light">
                  <div className="container">
                      <a className="navbar-brand" href="/">
                          E-Commerce
                      </a>

                      <div className="navbar-nav ms-auto">
                          <a className="nav-link" href="/">Home</a>
                          <a className="nav-link" href="#products">Products</a>
                          <a className="nav-link" href="#cart">Cart</a>
                          <a className="nav-link" href="#checkout">Checkout</a>
                      </div>
                  </div>
              </nav>

              <div id="products">
                <ProductList
                    products={PRODUCTS}
                    onAddToCart={addToCart}
                />
            </div>
            <div id="cart">
                <Cart
                    cartItems={cartItems}
                    onRemove={removeFromCart}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                />
            </div>
            <div id="checkout">
                <CheckoutForm
                    onSubmit={handleCheckout}
                />
            </div>

            </div>
        </ErrorBoundary>
    );
}

export default App;