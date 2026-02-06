import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  const hours = [
    { days: 'Monday - Friday', time: '7:00 AM - 7:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 8:00 PM' },
    { days: 'Sunday', time: '8:00 AM - 6:00 PM' },
  ];

  return (
    <section id="location" className="location">
      <div className="location__header reveal">
        <span className="section-label">Find Us</span>
        <h2 className="section-title">Come say hello</h2>
        <p className="section-subtitle">
          We'd love to see you. Swing by for a cup or just to browse the space.
        </p>
      </div>

      <div className="location__grid">
        <div className="location__map reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841333886684!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Coffee Shop Location"
          ></iframe>
        </div>

        <div className="location__details">
          <div className="location__card reveal reveal-delay-1">
            <div className="location__card-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Address</h4>
              <p>123 Coffee Street<br />Downtown District, City 12345</p>
            </div>
          </div>

          <div className="location__card reveal reveal-delay-2">
            <div className="location__card-icon">
              <FaClock />
            </div>
            <div>
              <h4>Hours</h4>
              <div className="location__hours">
                {hours.map(h => (
                  <div key={h.days} className="location__hours-row">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="location__card reveal reveal-delay-3">
            <div className="location__card-icon">
              <FaPhone />
            </div>
            <div>
              <h4>Phone</h4>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div className="location__card reveal reveal-delay-4">
            <div className="location__card-icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>hello@brewandbean.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
