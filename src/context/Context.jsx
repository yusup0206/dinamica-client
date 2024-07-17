import { createContext, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18n from '../i18n/index';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('user')) || null
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem('language') || 'tm'
  );
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('access_token'));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const showErrorToast = useCallback((errorMessage) => {
    toast.error(errorMessage);
  }, []);

  const showSuccessToast = useCallback((message) => {
    toast.success(message);
  }, []);

  const login = useCallback(
    (userData) => {
      try {
        const { user, access_token } = userData;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access_token', access_token);
        setIsAuth(true);
        setError('');
        showSuccessToast('Login successful');
        navigate('/home');
      } catch (error) {
        setError(error.message);
        setIsAuth(false);
        showErrorToast('Failed to login');
      }
    },
    [showSuccessToast, showErrorToast, navigate]
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    setIsAuth(false);
    showSuccessToast('Logged out successfully');
    navigate('/home');
  }, [showSuccessToast, navigate]);

  const changeLanguage = useCallback(
    (lng) => {
      setLanguage(lng);
      showSuccessToast(`Language changed to ${lng.toUpperCase()}`);
    },
    [showSuccessToast]
  );

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
        loading,
        setLoading,
        showErrorToast,
        showSuccessToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
