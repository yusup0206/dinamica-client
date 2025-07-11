import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { useAppStore } from "../../stores/store";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const queryClient = useQueryClient();

  const languageModalOpen = useAppStore((state) => state.languageModalOpen);
  const setLanguageModalOpen = useAppStore(
    (state) => state.setLanguageModalOpen
  );
  const setLanguage = useAppStore((state) => state.setLanguage);

  const showModal = () => setLanguageModalOpen(true);
  const handleCancel = () => setLanguageModalOpen(false);

  const handleLanguageChange = (lang: "tm" | "ru") => {
    setLanguage(lang, queryClient);
    setLanguageModalOpen(false);
  };
  const language = useAppStore((state) => state.language);

  return (
    <header className="sticky top-0 z-40">
      <nav className="sticky top-0 left-0 z-40 w-full bg-white ">
        <div className="container">
          <div className="w-full px-5 sm:px-10 py-3 flex items-center justify-between gap-4">
            <Link to={"/home"}>
              <h1 className="text-primary text-xl font-semibold mb-0">
                DINAMICA
              </h1>
            </Link>
            <div className="flex items-center justify-center gap-4">
              <Button icon={<UserOutlined />} type="primary" size="large" />
              <Button
                icon={<GlobalOutlined />}
                type="primary"
                size="large"
                onClick={showModal}
              />
              <Modal
                title="Choose language"
                open={languageModalOpen}
                onCancel={handleCancel}
                footer={false}
              >
                <div className="flex flex-col gap-4 mt-4">
                  <Button
                    type={language === "tm" ? "primary" : "default"}
                    size="large"
                    className="w-full"
                    onClick={() => handleLanguageChange("tm")}
                  >
                    Türkmen
                  </Button>
                  <Button
                    type={language === "ru" ? "primary" : "default"}
                    size="large"
                    className="w-full"
                    onClick={() => handleLanguageChange("ru")}
                  >
                    Русский
                  </Button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
