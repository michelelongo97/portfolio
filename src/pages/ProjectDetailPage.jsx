import { useParams, Link } from "react-router-dom";
import { projects } from "../api/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="text-center mt-5">
        <h2>Progetto non trovato</h2>
        <Link to="/projects" className="btn btn-dark mt-3">
          Torna ai progetti
        </Link>
      </div>
    );

  return (
    <div className="container">
      <div className="card shadow-sm p-4">
        {/* IMMAGINE */}
        <img
          src={`/${project.image}`}
          alt={project.title}
          className="img-fluid rounded mb-4"
          style={{ maxHeight: "420px", objectFit: "cover" }}
        />

        {/* TITOLO */}
        <h1 className="fw-bold mb-3">{project.title}</h1>

        {/* DESCRIZIONE */}
        <p className="lead">{project.description}</p>

        {/* STACK */}
        <h5 className="mt-4 mb-2">Stack utilizzato</h5>
        <div className="mb-4">
          {project.stack.map((tech, i) => (
            <span key={i} className="badge bg-secondary me-2 mb-2">
              {tech}
            </span>
          ))}
        </div>

        {/* BOTTONI */}
        <div className="d-flex flex-wrap gap-2">
          <a
            className="btn btn-dark"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github me-2"></i> GitHub
          </a>

          {project.demo !== "#" && (
            <a
              className="btn btn-outline-dark "
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-globe me-2"></i> Live
            </a>
          )}

          <Link to="/projects" className="btn btn-outline-secondary ms-auto">
            ← Torna ai progetti
          </Link>
        </div>
      </div>
    </div>
  );
}
