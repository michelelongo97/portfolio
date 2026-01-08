export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="display-4 fw-bold">Junior Full Stack Developer</h1>
      <p className="lead mt-3">React • Node • Express • MySQL</p>

      <div className="mt-4">
        <a className="btn btn-primary me-3" href="#">
          Scarica CV
        </a>
        <a className="btn btn-outline-dark" href="/projects">
          Vedi Progetti
        </a>
      </div>
    </div>
  );
}
