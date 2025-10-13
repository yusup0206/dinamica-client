import Router from "./routes/Router";

import "antd/dist/reset.css";
import { ConfigProvider, App as AntdApp } from "antd";
import { useAppStore } from "./stores/store";

import tkTK from "antd/es/locale/tk_TK";
import ruRU from "antd/es/locale/ru_RU";

const localeMap = {
  tm: tkTK,
  ru: ruRU,
};

const App = () => {
  const { language } = useAppStore();

  const currentLocale = localeMap[language] || tkTK;
  return (
    <ConfigProvider
      locale={currentLocale}
      theme={{
        token: {
          colorPrimary: "#1f2937",
          borderRadius: 6,
        },
      }}
    >
      <AntdApp>
        <Router />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
