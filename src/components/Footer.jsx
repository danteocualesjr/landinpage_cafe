import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__logo">Brew & Bean</h3>
            <p className="footer__tagline">
              Craft coffee, community, and good vibes since 2020.
            </p>
            <div className="footer__social">
              {[
                { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
                { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
                { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
              ].map(s => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer__links-group">
            <h4>Navigate</h4>
            <ul>
              {['home', 'about', 'menu', 'gallery', 'contact'].map(id => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => scrollTo(e, id)}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Hours</h4>
            <ul className="footer__hours">
              <li><span>Mon - Fri</span><span>7 AM - 7 PM</span></li>
              <li><span>Saturday</span><span>8 AM - 8 PM</span></li>
              <li><span>Sunday</span><span>8 AM - 6 PM</span></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Contact</h4>
            <ul>
              <li>123 Coffee Street</li>
              <li>Downtown District</li>
              <li>(555) 123-4567</li>
              <li>hello@brewandbean.com</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Brew & Bean. All rights reserved.</p>
          <p className="footer__credit">Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
