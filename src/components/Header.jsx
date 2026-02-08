import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'menu', 'testimonials', 'gallery', 'location', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const handleInitialScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // If at top, set home as active
      if (scrollY < windowHeight * 0.3) {
        setActiveSection('home');
      }
    };
    
    handleInitialScroll();

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--solid' : 'header--transparent'}`}>
      <div className="header__inner">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="header__logo">
          <span className="header__logo-text">Brew & Bean</span>
        </a>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {[
            ['home', 'Home'],
            ['about', 'About'],
            ['menu', 'Menu'],
            ['testimonials', 'Reviews'],
            ['gallery', 'Gallery'],
            ['location', 'Visit'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`header__link ${activeSection === id ? 'header__link--active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="header__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
