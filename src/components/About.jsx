import { FaSeedling, FaHandsHelping, FaCoffee } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    { icon: FaCoffee, title: 'Quality First', desc: 'Single-origin beans roasted in small batches for peak flavor' },
    { icon: FaHandsHelping, title: 'Community', desc: 'A gathering place where neighbors become friends' },
    { icon: FaSeedling, title: 'Sustainability', desc: 'Direct trade sourcing and fully compostable packaging' },
  ];

  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div className="about__images reveal">
          <div className="about__img about__img--main">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
              alt="Barista pouring latte art"
            />
          </div>
          <div className="about__img about__img--accent">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80"
              alt="Coffee shop interior"
            />
          </div>
        </div>

        <div className="about__text">
          <span className="section-label reveal">Our Story</span>
          <h2 className="about__heading reveal">
            Crafted with care<br />since 2020
          </h2>
          <p className="about__desc reveal reveal-delay-1">
            Brew & Bean started with a simple idea: coffee should be an experience, 
            not just a caffeine fix. We travel to meet our farmers, select only the 
            top 2% of each harvest, and roast everything on-site in small batches.
          </p>
          <p className="about__desc reveal reveal-delay-2">
            The result? A cup that tells a story. From the volcanic soils of Guatemala 
            to the misty hills of Ethiopia, every sip reflects the land, the people, 
            and the passion behind it.
          </p>
        </div>
      </div>

      <div className="about__values">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className={`about__value reveal reveal-delay-${i + 1}`}>
              <div className="about__value-icon">
                <Icon />
              </div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
