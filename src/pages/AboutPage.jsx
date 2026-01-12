export default function AboutPage() {
  return (
    <div className="card p-4 shadow-sm">
      <h1>Chi sono</h1>

      <p className="lead mt-3">
        Junior Full Stack Developer con forte interesse per React e backend
        REST.
      </p>

      <h5 className="mt-4">Stack</h5>
      <div className="d-flex flex-wrap gap-2">
        {["React", "Express", "MySQL", "Bootstrap"].map((tech, i) => (
          <span key={i} className="badge bg-primary">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
