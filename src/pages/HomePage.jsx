import { projects } from "../api/projects";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  const skills = [
    { name: "HTML", icon: "fab fa-html5", desc: "Struttura semantica" },
    { name: "CSS", icon: "fab fa-css3-alt", desc: "Stile e layout responsive" },
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      desc: "Logica e interazioni",
    },
    { name: "Bootstrap", icon: "fab fa-bootstrap", desc: "UI responsive" },
    { name: "React", icon: "fab fa-react", desc: "Hooks, Context, Routing" },
    { name: "Vite", icon: "fas fa-bolt", desc: "Build tool moderno" },
    { name: "Node.js", icon: "fab fa-node-js", desc: "Server REST e API" },
    { name: "Express", icon: "fas fa-server", desc: "Backend MVC" },
    { name: "MySQL", icon: "fas fa-database", desc: "Query e relazioni" },
    {
      name: "TypeScript",
      icon: "fas fa-code",
      desc: "Tipizzazione e robustezza",
    },
    { name: "Git & GitHub", icon: "fab fa-github", desc: "Versioning" },
  ];

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* HERO FULLSCREEN */}
      <div className="hero-full vh-100 d-flex align-items-center bg-dark text-light">
        <div className="container-fluid px-5">
          <div className="row align-items-center">
            {/* TESTO */}
            <div className="col-md-7 text-center text-md-start">
              <h1 className="display-4 fw-bold mb-3">
                Ciao, sono <span className="text-primary">Michele Longo</span>
              </h1>

              <h2 className="fw-semibold mb-3">Junior Full Stack Developer</h2>

              <p className="lead opacity-75">
                Trasformo idee in applicazioni web moderne con React, Node ed
                Express.
              </p>

              <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                <a
                  className="btn btn-primary btn-lg"
                  href={import.meta.env.VITE_CV}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-file-download me-2"></i> Scarica CV
                </a>

                <a className="btn btn-outline-light btn-lg" href="/projects">
                  <i className="fas fa-folder-open me-2"></i> Vedi Progetti
                </a>

                <button
                  className="btn btn-link text-light fs-4 text-decoration-none ms-md-3"
                  onClick={() =>
                    document
                      .getElementById("profilo")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>

            {/* BLOCCO DESTRA */}
            <div className="col-md-5 d-none d-md-block text-center">
              <div className="card bg-secondary bg-opacity-10 border-0 p-4 shadow-sm">
                <h5 className="fw-bold mb-2">Stack principale</h5>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <span className="badge bg-primary">React</span>
                  <span className="badge bg-primary">Node.js</span>
                  <span className="badge bg-primary">Express</span>
                  <span className="badge bg-primary">MySQL</span>
                  <span className="badge bg-primary">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROFILO */}
      <section id="profilo" className="container mb-5">
        <div className="card shadow-sm p-4">
          <h2 className="section-title mb-3">Profilo</h2>

          <p>
            Dopo un primo approccio alla programmazione durante il liceo e
            l'università, ho deciso di tornare a coltivare la mia passione per
            lo sviluppo software attraverso un percorso intensivo in Web
            Development.
          </p>

          <p>
            Mi appassiona costruire interfacce intuitive e funzionali, risolvere
            problemi in modo creativo e trasformare idee in progetti concreti.
            Grazie alle mie esperienze lavorative precedenti, ho sviluppato una
            forte capacità di adattamento, attenzione al dettaglio e
            orientamento al risultato, che oggi applico anche nella scrittura di
            codice.
          </p>

          <p className="mb-0">
            Cerco un contesto in cui poter crescere come sviluppatore, imparare
            da altri professionisti e contribuire attivamente allo sviluppo di
            prodotti digitali.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <h2 className="section-title text-center mb-4">Il mio stack</h2>

      <div className="row g-4 mb-5">
        {skills.map((skill, i) => (
          <div key={i} className="col-md-4 col-sm-6">
            <div className="card text-center p-4 shadow-sm h-100">
              <i className={`${skill.icon} fs-1 text-primary mb-3`}></i>
              <h5 className="fw-bold">{skill.name}</h5>
              <p className="text-muted mb-0">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PROGETTI IN EVIDENZA */}
      <section className="container mb-5">
        <h2 className="section-title text-center mb-4">Progetti in evidenza</h2>

        <div className="row g-4 mb-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <a href="/projects" className="btn btn-dark btn-lg">
            Vedi tutti i progetti →
          </a>
        </div>
      </section>
    </>
  );
}
