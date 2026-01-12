import { projects } from "../api/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-4 text-center">I miei progetti</h1>

      <div className="row g-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
