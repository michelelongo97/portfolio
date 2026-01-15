import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />

      {/* HOME: hero full width, resto in container */}
      {isHome ? (
        <>
          <Outlet />
        </>
      ) : (
        <main className="container py-5">
          <Outlet />
        </main>
      )}

      <Footer />
    </>
  );
}
