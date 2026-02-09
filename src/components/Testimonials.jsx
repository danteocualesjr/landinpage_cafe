import { useState, useEffect, useCallback } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular since 2021',
      rating: 5,
      text: 'The best coffee I\'ve had outside of Italy. The atmosphere is warm and inviting, and the baristas are genuine artists. This is my happy place.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Coffee Enthusiast',
      rating: 5,
      text: 'I\'ve tried specialty coffee shops all over the city. Brew & Bean is in a league of its own. The single-origin pour-over is an experience you won\'t forget.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Remote Worker',
      rating: 5,
      text: 'My go-to workspace. The Wi-Fi is fast, the ambiance is perfect for focus, and the matcha latte fuels my most productive days. Truly a gem.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Food Blogger',
      rating: 5,
      text: 'From the cold brew to the pastries, everything is made with incredible care. The staff remembers your name. It feels like home.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    },
  ];

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, testimonials.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, testimonials.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner reveal">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">Loved by our community</h2>

        <div className={`testimonials__card ${isAnimating ? 'testimonials__card--transitioning' : ''}`}>
          <FaQuoteLeft className="testimonials__quote-icon" />

          <div className="testimonials__stars">
            {[...Array(t.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="testimonials__text" key={t.id}>
            {t.text}
          </p>

          <div className="testimonials__author">
            <img src={t.image} alt={t.name} />
            <div>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          </div>
        </div>

        <div className="testimonials__controls">
          <button onClick={prev} aria-label="Previous" className="testimonials__arrow">
            <FaChevronLeft />
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${current === i ? 'testimonials__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next" className="testimonials__arrow">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
