import { projects } from "../api/projects";
import HeroCarousel from "../components/HeroCasrousel";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  const skills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "React", icon: "fab fa-react" },
    { name: "Vite", icon: "fas fa-bolt" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express", icon: "fas fa-server" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "Git & GitHub", icon: "fab fa-github" },
  ];

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* HERO FULLSCREEN */}
      <HeroCarousel />
      {/* CONTAINER */}
      <div className="container py-5 my-4">
        {/* PROFILO */}
        <section id="profilo" className="my-5">
          <div
            className="card profile-card p-4 mx-auto"
            style={{ maxWidth: "880px" }}
          >
            <h2 className="section-title mb-3 pb-3">Profilo</h2>

            <p>
              Dopo un primo approccio alla programmazione durante il liceo e
              l'università, ho deciso di tornare a coltivare la mia passione per
              lo sviluppo software attraverso un percorso intensivo in Web
              Development.
            </p>

            <p>
              Mi appassiona costruire interfacce intuitive e funzionali,
              risolvere problemi in modo creativo e trasformare idee in progetti
              concreti. Grazie alle mie esperienze lavorative precedenti, ho
              sviluppato una forte capacità di adattamento, attenzione al
              dettaglio e orientamento al risultato.
            </p>

            <p className="mb-0">
              Cerco un contesto in cui poter crescere come sviluppatore e
              contribuire attivamente allo sviluppo di prodotti digitali.
            </p>
          </div>
        </section>

        {/* PROGETTI */}
        <section className="my-5">
          <h2 className="section-title text-center mb-4 p-4">
            Progetti in evidenza
          </h2>

          <div className="row g-4 mb-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <a href="/projects" className="btn btn-danger btn-lg">
              Vedi tutti i progetti
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section className="my-5">
          <h2 className="section-title text-center mb-4 p-4">
            Competenze tecniche
          </h2>

          <div className="row g-4">
            {skills.map((skill, i) => (
              <div key={i} className="skills col-6 col-md-3 col-lg-2">
                <div className="card skill-card text-center p-3 h-100">
                  <i className={`${skill.icon} fs-2 mb-2`}></i>
                  <h6 className="mb-0">{skill.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
