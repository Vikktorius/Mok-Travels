// src/components/Landing.jsx
import React, { useState, useEffect } from "react";
import "./Landing.css";

const animatedImages = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];
const tickerImages = Array.from(
  { length: 19 },
  (_, i) => `/images/gc${i + 1}.png`
);

const carouselData = [
  {
    src: "/images/tour1.jpg",
    title: "Manila",
    desc: "China is a fascinating destination that offers a perfect blend of ancient history, vibrant culture, and stunning landscapes. From iconic landmarks like the Great Wall and the Forbidden City to modern cities like Shanghai, there’s something for everyone. Nature lovers can explore breathtaking spots like Zhangjiajie and Jiuzhaigou Valley, while food enthusiasts can indulge in authentic Chinese cuisine. The country’s rich traditions, friendly locals, and unique experiences make it a must-visit destination. Whether you’re seeking adventure, history, or relaxation, China has it all!",
  },
  {
    src: "/images/tour2.jpg",
    title: "China",
    desc: "China is a fascinating destination that offers a perfect blend of ancient history, vibrant culture, and stunning landscapes. From iconic landmarks like the Great Wall and the Forbidden City to modern cities like Shanghai, there’s something for everyone. Nature lovers can explore breathtaking spots like Zhangjiajie and Jiuzhaigou Valley, while food enthusiasts can indulge in authentic Chinese cuisine. The country’s rich traditions, friendly locals, and unique experiences make it a must-visit destination. Whether you’re seeking adventure, history, or relaxation, China has it all!",
  },
  {
    src: "/images/tour3.jpg",
    title: "Paris",
    desc: "China is a fascinating destination that offers a perfect blend of ancient history, vibrant culture, and stunning landscapes. From iconic landmarks like the Great Wall and the Forbidden City to modern cities like Shanghai, there’s something for everyone. Nature lovers can explore breathtaking spots like Zhangjiajie and Jiuzhaigou Valley, while food enthusiasts can indulge in authentic Chinese cuisine. The country’s rich traditions, friendly locals, and unique experiences make it a must-visit destination. Whether you’re seeking adventure, history, or relaxation, China has it all!",
  },
  {
    src: "/images/tour4.jpg",
    title: "Tokyo",
    desc: "China is a fascinating destination that offers a perfect blend of ancient history, vibrant culture, and stunning landscapes. From iconic landmarks like the Great Wall and the Forbidden City to modern cities like Shanghai, there’s something for everyone. Nature lovers can explore breathtaking spots like Zhangjiajie and Jiuzhaigou Valley, while food enthusiasts can indulge in authentic Chinese cuisine. The country’s rich traditions, friendly locals, and unique experiences make it a must-visit destination. Whether you’re seeking adventure, history, or relaxation, China has it all!",
  },
  {
    src: "/images/tour5.jpg",
    title: "Hongkong",
    desc: "China is a fascinating destination that offers a perfect blend of ancient history, vibrant culture, and stunning landscapes. From iconic landmarks like the Great Wall and the Forbidden City to modern cities like Shanghai, there’s something for everyone. Nature lovers can explore breathtaking spots like Zhangjiajie and Jiuzhaigou Valley, while food enthusiasts can indulge in authentic Chinese cuisine. The country’s rich traditions, friendly locals, and unique experiences make it a must-visit destination. Whether you’re seeking adventure, history, or relaxation, China has it all!",
  },
];

const testimonials = [
  {
    text: "MOK Travel and Tours made our trip seamless and stress-free. Their attention to detail and personalized service ensured we had an unforgettable experience. Highly recommended!",
    author: "Mrs Taye Aderinto",
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
    text: "This agency exceeded all expectations. Every aspect of the trip was planned perfectly and their customer service is exceptional.",
    author: "Chinedu Akpan",
  },
  {
    text: "From ticketing to tours, MOK Travel delivers top-notch services. I’ll definitely use them again for my next international trip.",
    author: "Abdulrahman Musa",
  },
  {
    text: "What a great experience! MOK Travel arranged everything smoothly. They truly care about their clients.",
    author: "Blessing James",
  },
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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
            {" "}
            We are a World-renowned IATA Travel Agent offering high quality,
            prompt and stress-free service delivery in the travel and tourism
            industry, using modern information technology, highly skilled and
            competent manpower and efficient Staff.
          </p>
          <button className="hero-button bounce-in">Talk to us Now ➤</button>
        </div>

        <div className="animated-grid transparent-bg">
          {animatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Travel"
              className="animated-img"
              style={{ "--i": index }}
            />
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
        <h2 className="light-blue">Beautiful Destinations to Explore</h2>
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
      <section className="certifications-section">
        <div className="certifications-text">
          <h2>
            Your Safety and Quality Assured:
            <br />
            <span>We are IATA and TICO Certified</span>
          </h2>
          <p>
            "We are proudly certified by IATA (International Air Transport
            Association) and TICO (Travel Industry Council of Ontario), ensuring
            the highest standards in travel and consumer protection."
          </p>
        </div>
        <div className="certifications-logos">
          <img src="./iata.jpg" alt="IATA Logo" className="logo1" />
          <img src="./iata2.jpg" alt="TICO Logo" className="logo2" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <p className="testimonial-label">Testimonials</p>
        <h2 className="testimonial-title">
          See what our customers have to say about us
        </h2>
        <img
          src="./Line1.svg"
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
