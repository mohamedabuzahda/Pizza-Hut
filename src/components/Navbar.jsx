import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black  sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="../../public/assets/unnamed.png" alt="Pizza Hut Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" to="/menu">Menu</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
