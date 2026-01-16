import { useState } from "react";
import { projects } from "../api/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const allStacks = ["All", ...new Set(projects.flatMap((p) => p.stack))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.stack.includes(filter));

  return (
    <>
      <h1 className="section-title text-center">I miei progetti</h1>

      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {allStacks.map((tech, i) => (
          <button
            key={i}
            className={`btn btn-sm filter-btn ${
              filter === tech ? "filter-btn-active" : ""
            }`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
