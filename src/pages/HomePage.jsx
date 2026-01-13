export default function HomePage() {
  const skills = [
    { name: "React", icon: "fab fa-react", desc: "Hooks, Context, Routing" },
    { name: "Node.js", icon: "fab fa-node-js", desc: "Server REST e API" },
    { name: "Express", icon: "fas fa-server", desc: "Backend MVC" },
    { name: "MySQL", icon: "fas fa-database", desc: "Query e relazioni" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", desc: "UI responsive" },
    { name: "Git & GitHub", icon: "fab fa-github", desc: "Versioning" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="hero text-center mb-5">
        <h1 className="display-4 fw-bold">Junior Full Stack Developer</h1>
        <p className="lead mt-3">
          Costruisco applicazioni moderne con React, Node ed Express.
        </p>

        <div className="mt-4">
          <a className="btn btn-light btn-lg me-3">Scarica CV</a>
          <a className="btn btn-outline-light btn-lg" href="/projects">
            Vedi Progetti
          </a>
        </div>
      </div>

      {/* SKILLS */}
      <h2 className="section-title text-center">Il mio stack</h2>

      <div className="row g-4">
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
    </>
  );
}
