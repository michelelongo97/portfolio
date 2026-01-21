import { useParams, Link } from "react-router-dom";
import { projects } from "../api/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="container py-5 text-center">
        <h2>Progetto non trovato</h2>
        <Link to="/projects" className="btn btn-danger mt-3">
          Torna ai progetti
        </Link>
      </div>
    );

  return (
    <div className="container py-5">
      {/* HEADER */}
      <div className="project-header mb-5">
        <Link to="/projects" className="project-back">
          ← Progetti
        </Link>

        <h1 className="project-title mt-3">{project.title}</h1>
        <p className="project-subtitle">{project.description}</p>
      </div>

      {/* IMAGE */}
      <div className="project-image-wrapper mb-5">
        <img
          src={`/${project.image}`}
          alt={project.title}
          className="project-image"
        />
      </div>

      {/* STACK + ACTIONS */}
      <div className="row align-items-center g-4">
        {/* STACK */}
        <div className="col-md-8">
          <h6 className="text-uppercase text-muted mb-2">
            Tecnologie utilizzate
          </h6>

          <div className="d-flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="project-tech">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="col-md-4 text-md-end">
          <div className="d-flex flex-wrap gap-2 justify-content-md-end">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-github"
            >
              <i className="fab fa-github me-2"></i> GitHub
            </a>

            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-danger"
              >
                <i className="fas fa-globe me-2"></i>Visita il sito →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
