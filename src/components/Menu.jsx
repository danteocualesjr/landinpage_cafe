import { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      { id: 1, name: 'Espresso', description: 'Rich, bold, our signature pull', price: '3.50', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80' },
      { id: 2, name: 'Cappuccino', description: 'Espresso, steamed milk & microfoam', price: '4.50', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80' },
      { id: 3, name: 'Latte', description: 'Silky steamed milk with a double shot', price: '4.75', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&q=80' },
      { id: 4, name: 'Americano', description: 'Hot water over espresso, pure & clean', price: '3.75', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80' },
      { id: 5, name: 'Mocha', description: 'Espresso meets single-origin chocolate', price: '5.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80' },
      { id: 6, name: 'Cold Brew', description: '18-hour steeped, smooth & refreshing', price: '4.25', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80' },
    ],
    pastries: [
      { id: 7, name: 'Butter Croissant', description: 'Flaky, golden, baked fresh daily', price: '3.50', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80' },
      { id: 8, name: 'Blueberry Muffin', description: 'Bursting with wild blueberries', price: '3.75', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80' },
      { id: 9, name: 'Chocolate Cookie', description: 'Crisp edges, gooey center', price: '2.50', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80' },
      { id: 10, name: 'Cinnamon Roll', description: 'Cream cheese icing, soft & warm', price: '4.50', image: 'https://images.unsplash.com/photo-1603532648955-039310d784ed?w=600&q=80' },
    ],
    specialty: [
      { id: 11, name: 'Matcha Latte', description: 'Ceremonial-grade matcha, oat milk', price: '5.50', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80' },
      { id: 12, name: 'Chai Latte', description: 'House-blend spices, steamed milk', price: '4.75', image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?w=600&q=80' },
      { id: 13, name: 'Caramel Macchiato', description: 'Vanilla, espresso, caramel drizzle', price: '5.25', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80' },
      { id: 14, name: 'Affogato', description: 'Hot espresso over vanilla gelato', price: '5.75', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80' },
    ],
  };

  const categories = [
    { id: 'coffee', label: 'Coffee' },
    { id: 'pastries', label: 'Pastries' },
    { id: 'specialty', label: 'Specialty' },
  ];

  return (
    <section id="menu" className="menu">
      <div className="menu__header reveal">
        <span className="section-label">The Menu</span>
        <h2 className="section-title">What we serve</h2>
        <p className="section-subtitle">
          Every item is crafted with intention, from our signature espresso blend 
          to our freshly baked pastries.
        </p>
      </div>

      <div className="menu__tabs reveal">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`menu__tab ${activeCategory === cat.id ? 'menu__tab--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="menu__grid">
        {menuItems[activeCategory].map((item, i) => (
          <div key={item.id} className={`menu__card reveal reveal-delay-${(i % 4) + 1}`}>
            <div className="menu__card-img">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="menu__card-body">
              <div className="menu__card-top">
                <h3>{item.name}</h3>
                <span className="menu__price">${item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
