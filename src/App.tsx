import Router from "./routes/Router";

// import "antd/dist/reset.css";
import { ConfigProvider, App as AntdApp } from "antd";
// import { useAppStore } from "./stores/store";
// import tmTM from "./locales/tm_TM";
// import ruRU from "./locales/ru_RU";
// const language = useAppStore((state) => state.language);

// const getAntdLocale = () => {
//   switch (language) {
//     case "tm":
//       return tmTM;
//     case "ru":
//       return ruRU;
//     default:
//       return tmTM;
//   }
// };

const App = () => {
  return (
    <ConfigProvider
      // locale={getAntdLocale()}
      theme={{
        token: {
          colorPrimary: "#1f2937",
          borderRadius: 8,
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
