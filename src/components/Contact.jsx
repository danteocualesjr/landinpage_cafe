import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!formData.email.trim()) err.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) err.email = 'Enter a valid email';
    if (!formData.message.trim()) err.message = 'Message is required';
    else if (formData.message.trim().length < 10) err.message = 'At least 10 characters';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__text reveal">
          <span className="section-label">Contact</span>
          <h2 className="contact__heading">Let's start a<br />conversation</h2>
          <p className="contact__desc">
            Whether you have a question about our menu, want to host an event, 
            or just want to say hello -- we'd love to hear from you.
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-label">Email</span>
              <span className="contact__info-value">hello@brewandbean.com</span>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Phone</span>
              <span className="contact__info-value">(555) 123-4567</span>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Address</span>
              <span className="contact__info-value">123 Coffee St, Downtown District</span>
            </div>
          </div>
        </div>

        <form className="contact__form reveal reveal-delay-2" onSubmit={handleSubmit}>
          {submitted && (
            <div className="contact__success">
              Message sent successfully. We'll get back to you soon.
            </div>
          )}

          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={errors.name ? 'contact__input--error' : ''}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={errors.email ? 'contact__input--error' : ''}
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind..."
              rows="5"
              className={errors.message ? 'contact__input--error' : ''}
            ></textarea>
            {errors.message && <span className="contact__error">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className={`contact__submit ${isSubmitting ? 'contact__submit--loading' : ''}`}
            disabled={isSubmitting}
          >
            <FaPaperPlane className={isSubmitting ? 'contact__submit-icon--spinning' : ''} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
