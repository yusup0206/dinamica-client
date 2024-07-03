import { createContext, useState } from 'react';
import i18n from '../i18n/index';

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('tm');
  const [isAuth, setIsAuth] = useState(true);
  console.log(isAuth);
  const login = (userData) => {
    setUser(userData);
    setIsAuth(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        language,
        changeLanguage,
        isAuth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
