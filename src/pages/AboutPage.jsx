export default function AboutPage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "Vite",
    "NodeJs",
    "Express",
    "MySQL",
    "TypeScript",
  ];

  return (
    <div className="container">
      <h1 className="section-title text-center mb-4">Chi sono</h1>

      {/* PROFILO */}
      <div className="card shadow-sm p-4 mb-5">
        <h3 className="fw-bold mb-3">Profilo</h3>

        <p>
          Dopo un primo approccio alla programmazione durante il liceo e
          l'università, ho deciso di tornare a coltivare la mia passione per lo
          sviluppo software attraverso un percorso intensivo in Web Development.
        </p>

        <p>
          Mi appassiona costruire interfacce intuitive e funzionali, risolvere
          problemi in modo creativo e trasformare idee in progetti concreti.
          Grazie alle mie esperienze lavorative precedenti, ho sviluppato una
          forte capacità di adattamento, attenzione al dettaglio e orientamento
          al risultato, che oggi applico anche nella scrittura di codice.
        </p>

        <p className="mb-0">
          Cerco un contesto in cui poter crescere come sviluppatore, imparare da
          altri professionisti e contribuire attivamente allo sviluppo di
          prodotti digitali.
        </p>
      </div>

      {/* COMPETENZE */}
      <h3 className="section-title text-center mb-4">Competenze Tecniche</h3>

      <div className="row g-3 justify-content-center">
        {skills.map((skill, i) => (
          <div key={i} className="col-md-3 col-sm-4 col-6">
            <div className="card text-center p-3 shadow-sm">
              <strong>{skill}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
