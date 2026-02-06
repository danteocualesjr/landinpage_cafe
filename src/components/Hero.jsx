import { useEffect, useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        const bg = heroRef.current.querySelector('.hero__bg');
        if (bg) {
          bg.style.transform = `translateY(${scroll * 0.3}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__bg"></div>
      <div className="hero__overlay"></div>
      <div className="hero__grain"></div>

      <div className="hero__content">
        <span className="hero__tag">Est. 2020 &mdash; Craft Coffee</span>
        <h1 className="hero__title">
          Every cup,<br />
          <em>a moment.</em>
        </h1>
        <p className="hero__desc">
          We source rare, single-origin beans and roast them with care 
          to bring out flavors you never knew coffee could have.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="hero__btn hero__btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Explore the Menu
          </a>
          <a href="#about" className="hero__btn hero__btn--ghost" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Our Story
          </a>
        </div>
      </div>

      <button className="hero__scroll-hint" onClick={scrollToAbout} aria-label="Scroll down">
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Hero;
