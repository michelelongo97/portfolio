import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Ciao, sono Michele Longo",
    subtitle: "Junior Full Stack Developer",
    text: "Creo interfacce moderne e applicazioni web funzionali usando React, Node ed Express.",
    cta: { label: "Scarica CV", link: import.meta.env.VITE_CV, external: true },
  },
  {
    title: "Il mio approccio",
    subtitle: "Pulizia. Performance. Esperienza utente.",
    text: "Mi piace scrivere codice ordinato, progettare UI intuitive e trasformare idee in prodotti reali.",
    cta: { label: "Vedi Progetti", link: "/projects", external: false },
  },
  {
    title: "Il mio obiettivo",
    subtitle: "Entrare in un team e crescere",
    text: "Cerco una realtà dove poter imparare ogni giorno e contribuire allo sviluppo di soluzioni digitali di valore.",
    cta: { label: "Contattami", link: "/contact", external: false },
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevSlide = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      nextSlide(); // swipe sinistra
    }

    if (distance < -minSwipeDistance) {
      prevSlide(); // swipe destra
    }
  };

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section
      className="hero-pro d-flex align-items-center justify-content-center"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="container text-center hero-content">
        <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <h1 className="hero-title">{slide.title}</h1>
        <h2 className="hero-subtitle">{slide.subtitle}</h2>
        <p className="hero-desc">{slide.text}</p>

        {slide.cta.external ? (
          <a
            href={slide.cta.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger btn-lg mt-3"
          >
            {slide.cta.label}
          </a>
        ) : (
          <Link to={slide.cta.link} className="btn btn-danger btn-lg mt-3">
            {slide.cta.label}
          </Link>
        )}

        <div className="hero-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`dot ${i === index ? "active" : ""}`}
            ></span>
          ))}
        </div>
        <div className="d-flex justify-content-center gap-3 mt-5">
          <a
            href={import.meta.env.VITE_SOCIAL_GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href={import.meta.env.VITE_SOCIAL_LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="hero-scroll-wrapper">
        <button
          className="hero-scroll"
          onClick={() =>
            document
              .getElementById("profilo")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </section>
  );
}
