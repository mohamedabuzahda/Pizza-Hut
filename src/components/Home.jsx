import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="home" className="hero-section">
            <div>
                <h1 className='text-black'>Welcome to Pizza Hut</h1>
                <p className="text-black fs-4 mt-5">Savor the taste of our delicious pizzas made with fresh ingredients!</p>
                <Link to="/menu" className="btn btn-danger btn-lg mt-3">Explore Menu</Link>
            </div>
        </section>
    );
};

export default Home;