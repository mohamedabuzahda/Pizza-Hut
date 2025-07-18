import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2);

    return (
        <div className="container my-5">
            <h2 className="mb-4">Your Cart</h2>

            {cart.length === 0 ? (
                <p className="lead">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="list-group mb-3">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{item.name ? item.name : 'No Name'} - ${item.price ? item.price.toFixed(2) : '0.00'}</span>
                                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h5>Total: ${total}</h5>
                </>
            )}
        </div>
    );
};

export default Cart;
