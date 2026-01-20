import { useState, useEffect } from "react";

const slides = [
  {
    title: "Ciao, sono Michele Longo",
    subtitle: "Junior Full Stack Developer",
    text: "Creo interfacce moderne e applicazioni web funzionali usando React, Node ed Express.",
    cta: { label: "Scarica CV", link: import.meta.env.VITE_CV },
  },
  {
    title: "Il mio approccio",
    subtitle: "Pulizia. Performance. Esperienza utente.",
    text: "Mi piace scrivere codice ordinato, progettare UI intuitive e trasformare idee in prodotti reali.",
    cta: { label: "Vedi Progetti", link: "/projects" },
  },
  {
    title: "Il mio obiettivo",
    subtitle: "Entrare in un team e crescere",
    text: "Cerco una realtà dove poter imparare ogni giorno e contribuire allo sviluppo di soluzioni digitali di valore.",
    cta: { label: "Contattami", link: "/contact" },
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setIndex((i) => (i + 1) % slides.length);
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
    <section className="hero-pro d-flex align-items-center justify-content-center">
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

        <a
          href={slide.cta.link}
          className="btn btn-danger btn-lg mt-3"
          target={slide.cta.link.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
        >
          {slide.cta.label}
        </a>

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

          <a
            href={import.meta.env.VITE_SOCIAL_INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <i className="fab fa-instagram"></i>
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
