import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <Link
        to={`/projects/${project.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5>{project.title}</h5>
            <p>{project.description}</p>

            <div className="mb-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="badge bg-secondary me-1">
                  {tech}
                </span>
              ))}
            </div>

            <div className="d-flex gap-2">
              <a
                href={project.github}
                className="btn btn-dark btn-sm"
                target="_blank"
              >
                GitHub
              </a>
              <a href={project.demo} className="btn btn-outline-primary btn-sm">
                Live
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
