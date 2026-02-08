import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling past hero section (400px threshold)
      setIsVisible(scrollY > 400);
      
      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 
        ? (scrollY / scrollableHeight) * 100 
        : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  if (!isVisible) return null;

  // Calculate stroke-dashoffset for circular progress
  const circumference = 2 * Math.PI * 20; // radius = 20
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      aria-label="Back to top"
    >
      <svg
        className="back-to-top__progress"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        aria-hidden="true"
      >
        <circle
          className="back-to-top__progress-bg"
          cx="28"
          cy="28"
          r="20"
          fill="none"
          strokeWidth="2"
        />
        <circle
          className="back-to-top__progress-fill"
          cx="28"
          cy="28"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 28 28)"
        />
      </svg>
      <FaArrowUp className="back-to-top__icon" />
    </button>
  );
};

export default BackToTop;
