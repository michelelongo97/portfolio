export default function HomePage() {
  return (
    <div className="hero text-center">
      <h1 className="display-4 fw-bold">Junior Full Stack Developer</h1>
      <p className="lead mt-3">
        Costruisco applicazioni moderne con React, Node ed Express.
      </p>

      <div className="mt-4">
        <a className="btn btn-light btn-lg me-3">Scarica CV</a>
        <a className="btn btn-outline-light btn-lg" href="/projects">
          Vedi Progetti
        </a>
      </div>
    </div>
  );
}
