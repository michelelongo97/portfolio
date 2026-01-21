import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pagina non trovata</h1>
      <button
        className="btn btn-danger btn-lg mt-3"
        onClick={() => navigate("/")}
      >
        Torna in Home
      </button>
    </div>
  );
}
