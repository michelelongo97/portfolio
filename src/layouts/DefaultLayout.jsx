import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container py-5 my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
