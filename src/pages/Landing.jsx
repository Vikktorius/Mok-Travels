// src/components/Landing.jsx
import React, { useState, useEffect } from "react";
import "./Landing.css";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
];

const tickerImages = Array.from(
  { length: 20 },
  (_, i) => `/images/gc${i + 1}.png`
);

const carouselData = [
  {
    src: "/images/Rwanda.jpg",
    title: "Africa",
    desc: "Africa is a continent of incredible diversity, offering unforgettable experiences from the vast savannas of Kenya and Tanzania to the vibrant cities of Lagos and Cape Town. Discover majestic wildlife, ancient cultures, iconic landmarks like the Pyramids of Egypt, and breathtaking natural wonders such as Victoria Falls. Whether you're seeking adventure, relaxation, or cultural exploration, Africa is a truly enriching destination.",
  },
  {
    src: "/images/Dubai.jpg",
    title: "Dubai",
    desc: "Dubai is a futuristic city of luxury and innovation, where tradition meets modernity. Marvel at the Burj Khalifa, shop in mega-malls, and experience desert safaris and gold souks. From opulent hotels to cultural heritage sites, Dubai delivers unforgettable adventures with world-class hospitality.",
  },

  {
    src: "/images/Carribean.jpg",
    title: "Carribean",
    desc: "The Caribbean is a tropical paradise known for its turquoise waters, white-sand beaches, and laid-back island vibes. Discover diverse cultures, enjoy world-class snorkeling and diving, and dance to the rhythms of calypso and reggae. Ideal for romantic getaways, cruises, and family vacations, the Caribbean is sun-soaked bliss year-round.",
  },
  {
    src: "/images/Mannilla.jpg",
    title: "Mannilla",
    desc: "Manila, the vibrant capital of the Philippines, blends Spanish colonial charm with modern energy. Explore historic Intramuros, bustling markets, and vibrant nightlife. Enjoy Filipino cuisine, warm hospitality, and easy access to tropical islands like Palawan and Boracay. Manila is a gateway to adventure and culture.",
  },
  {
    src: "/images/China.jpg",
    title: "China",
    desc: "China offers a captivating mix of ancient wonders and futuristic cities. Explore world-famous sites like the Great Wall, the Forbidden City, and the Terracotta Army. Modern cities like Shanghai and Beijing dazzle with technology, culture, and cuisine. Whether you're a history buff, foodie, or nature enthusiast, China has something unforgettable to offer.",
  },
];

const testimonials = [
  {
    text: "Wonderful dealing with Mok travel Agency",
    author: "James Adeniyi",
  },
  {
    text: "I had an amazing vacation planned by MOK. They were professional, responsive, and tailored everything to my needs. 10/10!",
    author: "John Okafor",
  },
  {
    text: "Thanks to MOK Travel and Tours, my honeymoon was magical. They managed every detail with such care and excellence.",
    author: "Ngozi Eze",
  },
  {
    text: "For your tickets booking and hotel reservation, they are very reiable and trustworthy.",
    author: "Babatunde Faleye",
  },
  {
    text: "From ticketing to tours, MOK Travel delivers top-notch services. I’ll definitely use them again for my next international trip.",
    author: "Abdulrahman Musa",
  },
  {
    text: "Always available to help, very good service.",
    author: "Michael AyanOba Adeoba",
  },
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % images.length);
      console.log("Featured Index:", next);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="landing-section">
      <div className="hero-area">
        <div className="bg-img">
          <img src="./home.jpg" alt="Home" className="landing-img" />
        </div>

        <div className="hero-text-container fade-in transparent-bg">
          <h1 className="hero-heading bounce-in-left">
            We are Committed to Excellent Services
          </h1>
          <p className="hero-paragraph bounce-in-right">
            We are a World-renowned IATA Travel Agent offering high quality,
            prompt and stress-free service delivery in the travel and tourism
            industry, using modern information technology, highly skilled and
            competent manpower and efficient Staff.
          </p>
          <a href="tel:+1 416-631-0435" className="hero-button bounce-in">
            Talk to us Now ➤
          </a>
        </div>

        <div className="image-row desktop-only">
          {images.map((src, index) => (
            <div
              key={index}
              className={`image-wrapper ${
                index === featuredIndex ? "featured" : ""
              }`}
            >
              <img src={src} alt={`img-${index}`} className="image-box" />
            </div>
          ))}
        </div>

        <div className="ticker-wrapper transparent-bg">
          <div className="ticker-track">
            {[...tickerImages, ...tickerImages].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`ticker-${index}`}
                className="ticker-image"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Travel Services Section */}
      <section className="travel-section">
        <div className="travel-image">
          <img src="./Grp.jpg" alt="Travel Graphic" />
        </div>

        <div className="travel-content">
          <div className="services">
            <h2 className="section-title">Our Services</h2>
            <div className="text-block">
              <p>We offer the following professional services.</p>
              <p>Air ticketing and Reservation</p>
              <p>
                Tour packages – All-inclusive <br />
                mostly to all (Caribbean Countries)
              </p>
              <p>
                Processing of Nigeria Visa, Ghana Visa,
                <br />
                Republic of Benin and others on <br />
                Canadian Passport, American <br />
                Passport and all other Passport.
              </p>
              <p>Assisting in processing Nigeria Passport Application.</p>
              <p>Processing of Nigeria Travel documents</p>
            </div>
          </div>

          <div className="spreads">
            <h2 className="section-title">Our Spreads</h2>
            <div className="text-block">
              <p>Contact us for affordable ticket when travelling to:</p>
              <p>
                NIGERIA, GHANA, COTONOU, IVORY COAST,
                <br />
                KENYA, DUBAI, CHINA, HONG KONG,
                <br />
                INDONESIA, JAPAN, KOREA, MALAYSIA,
                <br />
                MANILA, SINGAPORE, THAILAND,
                <br />
                GERMANY, ITALY, HOLLAND, ZURICH,
                <br />
                LONDON, ENGLAND AND OTHERS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Header */}
      <div className="carusel-header">
        <p>Vacation and tours</p>
        <h1 className="light-blue">Beautiful Destinations to Explore</h1>
      </div>

      {/* Carousel Section */}
      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-slide">
          <img
            src={carouselData[currentIndex].src}
            alt={`slide-${currentIndex}`}
            className="carousel-image"
          />
          <div className="carousel-caption">
            <h1>{carouselData[currentIndex].title}</h1>
            <h3>{carouselData[currentIndex].desc}</h3>
          </div>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <section className="certification">
        <div className="cert-text">
          <h1>
            Your Safety and <br />
            Quality Assured: <br />
            <span className="cert-highlight">
              We are IATA and <br />
              TICO Certified"
            </span>
          </h1>
          <p>
            "We are proudly certified by IATA (International Air Transport
            Association) and TICO (Travel Industry Council of Ontario), ensuring
            the highest standards in travel and consumer protection."
          </p>
        </div>
        <div className="cert-logos">
          <img src="./iata.jpg" alt="IATA Logo" />
          <img src="./iata2.jpg" alt="TICO Logo" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <p className="testimonial-label">Testimonials</p>
        <h2 className="testimonial-title">
          See what our customers have to say about us
        </h2>
        <img
          src="./line1.jpg"
          alt="Separator"
          className="testimonial-separator"
        />

        <div className="testimonial-box">
          <p className="testimonial-text">
            "{testimonials[testimonialIndex].text}"
          </p>
          <h4 className="testimonial-author">
            {testimonials[testimonialIndex].author}
          </h4>
        </div>

        <div className="testimonial-controls">
          <button
            onClick={() =>
              setTestimonialIndex(
                (testimonialIndex - 1 + testimonials.length) %
                  testimonials.length
              )
            }
            className="arrow-button"
          >
            &#10094;
          </button>
          <div className="dots">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === testimonialIndex ? "active" : ""}`}
                onClick={() => setTestimonialIndex(idx)}
              ></span>
            ))}
          </div>
          <button
            onClick={() =>
              setTestimonialIndex((testimonialIndex + 1) % testimonials.length)
            }
            className="arrow-button"
          >
            &#10095;
          </button>
        </div>
      </section>
    </section>
  );
};

export default Landing;
