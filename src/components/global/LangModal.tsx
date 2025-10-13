import { useQueryClient } from "@tanstack/react-query";
import { Button, Modal } from "antd";
import { useAppStore } from "../../stores/store";

import { GlobalOutlined } from "@ant-design/icons";

const LangModal = () => {
  const queryClient = useQueryClient();

  const languageModalOpen = useAppStore((state) => state.languageModalOpen);
  const setLanguageModalOpen = useAppStore(
    (state) => state.setLanguageModalOpen
  );
  const setLanguage = useAppStore((state) => state.setLanguage);

  const handleLanguageChange = (lang: "tm" | "ru") => {
    setLanguage(lang, queryClient);
    setLanguageModalOpen(false);
  };
  const language = useAppStore((state) => state.language);

  return (
    <>
      <div className="hidden md:flex">
        <Button
          icon={<GlobalOutlined />}
          type="primary"
          size="large"
          onClick={() => setLanguageModalOpen(true)}
        />
      </div>
      <div className="flex md:hidden">
        <Button
          icon={<GlobalOutlined />}
          type="text"
          size="large"
          onClick={() => setLanguageModalOpen(true)}
        />
      </div>

      <Modal
        title={language === "tm" ? "Dil saýlaň" : "Выберите язык"}
        open={languageModalOpen}
        onCancel={() => setLanguageModalOpen(false)}
        footer={false}
        centered
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
    </>
  );
};

export default LangModal;
