import { CaretLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "../../stores/store";
import LangModal from "./LangModal";

const Header = () => {
  const token = useAppStore((state) => state.token);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 z-40 w-full">
      <nav className="w-full bg-white ">
        <div className="container">
          <div className="w-full px-5 md:px-10 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {location.pathname.includes("home") ? null : (
                <span className="flex md:hidden">
                  <Button
                    onClick={() => navigate(-1)}
                    type="text"
                    size="small"
                    icon={<CaretLeftOutlined />}
                  />
                </span>
              )}
              <Link to="/home">
                <span className="text-primary text-xl font-semibold mb3-0">
                  DINAMICA
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center gap-4">
              <LangModal />
              <Link to={token ? "/profile/schedule" : "/login"}>
                <Button icon={<UserOutlined />} type="primary" size="large" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
