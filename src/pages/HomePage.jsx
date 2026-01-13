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
      {/* HERO */}
      <div className="hero text-center mb-5">
        <h1 className="display-4 fw-bold">Junior Full Stack Developer</h1>
        <p className="lead mt-3">
          Costruisco applicazioni moderne con React, Node ed Express.
        </p>

        <div className="mt-4">
          <a
            className="btn btn-light btn-lg me-3"
            href={import.meta.env.VITE_CV}
          >
            Scarica CV
          </a>
          <a className="btn btn-outline-light btn-lg" href="/projects">
            Vedi Progetti
          </a>
        </div>
      </div>

      {/* PROFILO */}
      <section className="container mb-5">
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
