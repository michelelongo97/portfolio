import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Compila tutti i campi");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("Messaggio inviato correttamente");
      } else {
        alert("Errore nell'invio");
      }
    } catch (error) {
      alert("Errore di rete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row g-4">
      {/* FORM CARD */}
      <div className="col-md-6">
        <div className="card p-4 shadow-sm h-100">
          <h3 className="mb-3">Scrivimi</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              name="name"
              placeholder="Nome"
              onChange={handleChange}
              value={formData.name}
            />

            <input
              className="form-control mb-3"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />

            <textarea
              className="form-control mb-3"
              name="message"
              rows="5"
              placeholder="Messaggio"
              onChange={handleChange}
              value={formData.message}
            />

            <button className="btn btn-danger w-100" disabled={loading}>
              {loading ? "Invio in corso..." : "Invia messaggio"}
            </button>
          </form>
        </div>
      </div>

      {/* INFO CARD */}
      <div className="col-md-6">
        <div className="card p-4 shadow-sm h-100">
          <h3 className="mb-3">I miei contatti</h3>

          <p>
            📍 <strong>Località:</strong> Italia
          </p>
          <p>
            ✉️ <strong>Email:</strong> {import.meta.env.VITE_EMAIL}
          </p>

          <p>
            💻 <strong>GitHub:</strong>{" "}
            <a
              href={import.meta.env.VITE_SOCIAL_GITHUB}
              target="_blank"
              className="text-danger"
              rel="noreferrer"
            >
              {import.meta.env.VITE_SOCIAL_GITHUB}
            </a>
          </p>

          <p>
            🔗 <strong>LinkedIn:</strong>{" "}
            <a
              href={import.meta.env.VITE_SOCIAL_LINKEDIN}
              target="_blank"
              className="text-danger"
              rel="noreferrer"
            >
              {import.meta.env.VITE_SOCIAL_LINKEDIN}
            </a>
          </p>

          <hr />

          <p className="text-muted">
            Sono disponibile per opportunità come Junior Frontend / Full Stack
            Developer.
          </p>
        </div>
      </div>

      <div className="col-12 mt-4">
        <div className="card p-4 h-100 d-flex flex-column">
          <h4 className="fw-bold mb-3 text-danger">
            Certificazione Boolean Careers
          </h4>

          <p className="text-muted">
            Ho completato il percorso intensivo Full Stack Web Developer presso
            Boolean Careers, un corso di 600 ore pensato per insegnare le
            competenze necessarie per diventare Web Developer.
          </p>

          <p className="text-muted mb-2">
            Durante la formazione ho acquisito competenze in:
          </p>

          <ul className="text-muted mb-4">
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>Node.js ed Express</li>
            <li>MySQL e API REST</li>
            <li>TypeScript</li>
            <li>Git e GitHub</li>
          </ul>

          {/* CTA */}
          <div className="mt-auto text-end">
            <a
              href={import.meta.env.VITE_CERTIFICAZIONE}
              target="_blank"
              rel="noreferrer"
              className="project-detail-link"
            >
              Visualizza certificazione →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
