import { useParams } from "react-router-dom";
import { projects } from "../api/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h2>Progetto non trovato</h2>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>

      <h5 className="mt-4">Stack utilizzato</h5>
      <ul>
        {project.stack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      <div className="mt-3">
        <a className="btn btn-dark me-2" href={project.github} target="_blank">
          GitHub
        </a>
        <a
          className="btn btn-outline-primary"
          href={project.demo}
          target="_blank"
        >
          Demo Live
        </a>
      </div>
    </div>
  );
}
