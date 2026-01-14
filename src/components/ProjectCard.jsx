import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm overflow-hidden">
        {/* IMAGE */}
        <img
          src={`/${project.image}`}
          className="card-img-top"
          alt={project.title}
          style={{ height: "180px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold">{project.title}</h5>
          <p className="text-muted flex-grow-1">{project.description}</p>

          <div className="mb-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="badge bg-secondary me-1">
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="d-flex gap-2 mt-3">
            <a
              href={project.github}
              target="_blank"
              className="btn btn-dark btn-sm w-50"
            >
              <i className="fab fa-github me-1"></i> GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              className="btn btn-outline-dark btn-lg btn-sm w-50"
            >
              <i className="fas fa-globe me-1"></i> Live
            </a>
          </div>

          {/* LINK DETTAGLIO */}
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-outline-dark btn-lg btn-sm mt-2 p-0"
          >
            Dettagli progetto →
          </Link>
        </div>
      </div>
    </div>
  );
}
