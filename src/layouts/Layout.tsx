import { Outlet } from "react-router-dom";

// components
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pageHeight bg-bgColor text-textColor py-5 mt-[52px] md:mt-[64px] pb-[80px] md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
