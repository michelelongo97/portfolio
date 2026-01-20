export default function Footer() {
  return (
    <footer className="bg-black text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* COL SINISTRA - SOCIAL */}
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Seguimi</h5>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a
                href={import.meta.env.VITE_SOCIAL_GITHUB}
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href={import.meta.env.VITE_SOCIAL_LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* COL DESTRA - INFO */}
          <div className="col-md-6 mb-4 text-md-end">
            <h5 className="fw-bold">Michele Longo</h5>
            <p className="mb-1">
              Junior Full Stack Developer – React | Express | MySQL
            </p>
            <small>
              © {new Date().getFullYear()} Tutti i diritti riservati
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
