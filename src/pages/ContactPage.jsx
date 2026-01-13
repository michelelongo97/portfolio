import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Backend in arrivo 😉");
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
            />

            <input
              className="form-control mb-3"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <textarea
              className="form-control mb-3"
              name="message"
              rows="5"
              placeholder="Messaggio"
              onChange={handleChange}
            />

            <button className="btn btn-primary w-100">Invia messaggio</button>
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
            ✉️ <strong>Email:</strong> tuamail@email.com
          </p>

          <p>
            💻 <strong>GitHub:</strong>{" "}
            <a href="https://github.com/tuonome" target="_blank">
              github.com/tuonome
            </a>
          </p>

          <p>
            🔗 <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/tuonome" target="_blank">
              linkedin.com/in/tuonome
            </a>
          </p>

          <hr />

          <p className="text-muted">
            Sono disponibile per opportunità come Junior Frontend / Full Stack
            Developer.
          </p>
        </div>
      </div>
    </div>
  );
}
