import React, { useState } from 'react';
import img1 from '../assets/dcda3d76-687e-4fc8-b7f0-8dec95e37549.avif';
import img2 from '../assets/Pizza-Hut-Charcuterie-Pizza-FT-BLOG0325-01-5dfdf7013950447a873985e19b0e2f67.jpg';
import img3 from '../assets/Pizza-Hut-The-Big-New-Yorker-Pizza-Taste-Test.-Allison-Robicelli-Resize-Recolor-Crop-DH-TOH-SOCIAL.jpg';
import img4 from '../assets/pizza-hut.jpg';
import img5 from '../assets/images.jpg';
import img6 from '../assets/images (1).jpg';
import img7 from '../assets/pizzahut.jpg';
import img8 from '../assets/dcda3d76-687e-4fc8-b7f0-8dec95e37549.avif';
import img9 from '../assets/f1b0be708793a9a42ee96e5f68bf0283.webp';


const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 12.99, image: img1, category: "Pizza" },
  { id: 2, name: "Pepperoni Pizza", price: 14.99, image: img2, category: "Pizza" },
  { id: 3, name: "Caesar Pizza", price: 8.99, image: img3, category: "Salad" },
  { id: 4, name: "Garlic Pizza", price: 7.99, image: img4, category: "Sides" },
  { id: 5, name: "Chicken Pizza", price: 5.99, image: img5, category: "Sides" },
  { id: 6, name: "Beef Pizza", price: 3.99, image: img6, category: "Sides" },
  { id: 7, name: "Meat Pizza", price: 2.99, image: img7, category: "Sides" },
  { id: 8, name: "Soses Pizza", price: 10.99, image: img8, category: "Sides" },
  { id: 9, name: "Swarm Pizza", price: 11, image: img9, category: "Sides" },
];


const Menu = ({ addToCart, addToWishlist, wishlist }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === 'All' || item.category === categoryFilter)
    );

    return (
        <section id="menu" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Menu</h2>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search dishes..." 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                        />
                    </div>
                    <div className="col-md-6">
                        <select className="form-select" onChange={(e) => setCategoryFilter(e.target.value)}>
                            <option value="All">All Categories</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Salad">Salad</option>
                            <option value="Sides">Sides</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {filteredItems.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card menu-item">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price.toFixed(2)}</p>
                                    <button className="btn btn-danger me-2" onClick={() => addToCart(item)}>Add to Cart</button>
                                    <span 
                                        className={`wishlist-heart ${wishlist.includes(item.id) ? 'text-danger' : 'text-muted'}`} 
                                        onClick={() => addToWishlist(item.id)}
                                    >
                                        ♥
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;