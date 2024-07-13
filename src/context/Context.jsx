import { createContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18n from '../i18n/index';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'tm'
  );
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem('user', JSON.stringify(user));
  //   } else {
  //     localStorage.removeItem('user');
  //   }
  // }, [user]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // Function to display error toast
  const showErrorToast = (errorMessage) => {
    toast.error(errorMessage);
  };

  // Function to display success toast
  const showSuccessToast = (message) => {
    toast.success(message);
  };

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('access_token', userData.access_token);
      setIsAuth(true);
      setError('');
      showSuccessToast('Login successful');
      navigate('/schedule');
    } catch (error) {
      setError(error);
      setIsAuth(false);
      showErrorToast('Failed to login');
    }
    // setUser(userData);
    // if (userData.number === '65123456' && userData.password === '123') {
    //   setUser(userData);
    //   setIsAuth(true);
    //   setError('');
    //   showSuccessToast('Login successful');
    //   navigate('/home');
    // } else {
    //   setError('Invalid credentials');
    //   setIsAuth(false);
    //   showErrorToast('Invalid credentials');
    // }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('access_token');
    setIsAuth(false);
    showSuccessToast('Logged out successfully');
    navigate('/home');
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    showSuccessToast(`Language changed to ${lng.toUpperCase()}`);
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
        error,
        showErrorToast,
        showSuccessToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
