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
    <div className="card p-4 shadow-sm col-md-6 mx-auto">
      <h1>Contattami</h1>

      <form onSubmit={handleSubmit} className="mt-3">
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="message"
          rows="4"
          placeholder="Messaggio"
          onChange={handleChange}
        />

        <button className="btn btn-primary mt-2">Invia</button>
      </form>
    </div>
  );
}
