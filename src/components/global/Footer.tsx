import { Button } from "antd";
import { Link } from "react-router-dom";

// icons
import { HomeFilled, MenuOutlined } from "@ant-design/icons";
import LangModal from "./LangModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full fixed md:static bottom-0 left-0 z-40 bg-white">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5">
          <div className="w-full text-center hidden md:flex items-center justify-center">
            <span className="text-textColor text-base md:text-lg text-center">
              Dinamica &copy;{currentYear}
            </span>
          </div>
          <nav className="w-full flex md:hidden items-center justify-evenly gap-4">
            <Link to="/">
              <Button
                type="text"
                size="large"
                icon={<HomeFilled />}
                className="text-primary"
              ></Button>
            </Link>
            <LangModal />
            <Link to="/profile/menu">
              <Button
                type="text"
                size="large"
                icon={<MenuOutlined />}
                className="text-primary"
              ></Button>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
