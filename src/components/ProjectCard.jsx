import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card project-card h-100">
        {/* IMAGE */}
        <div className="project-thumb">
          <img src={`/${project.image}`} alt={project.title} />

          {/* OVERLAY */}
          <div className="project-overlay">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-sm"
            >
              <i className="fab fa-github me-1"></i> Repo
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-danger btn-sm"
            >
              <i className="fas fa-globe me-1"></i> Live
            </a>
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold mb-1">{project.title}</h5>
          <p className="text-muted small flex-grow-1">{project.description}</p>

          <div className="mb-3">
            {project.stack.map((tech, i) => (
              <span key={i} className="badge tech-badge me-1 mb-1">
                {tech}
              </span>
            ))}
          </div>

          <Link to={`/projects/${project.id}`} className="project-detail-link">
            Dettagli progetto →
          </Link>
        </div>
      </div>
    </div>
  );
}
