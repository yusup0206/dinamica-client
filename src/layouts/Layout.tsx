import { Outlet } from "react-router-dom";

// components
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bgColor text-textColor py-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
