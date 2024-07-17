// import LoginForm from '../components/LoginForm';

import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context/Context';
import axiosInstance from '../axiosInstance';
import { LuLoader2 } from 'react-icons/lu';

const Login = () => {
  const { t } = useTranslation();

  // const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, showErrorToast, loading, setLoading } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showErrorToast('Please fill in all fields');
      return;
    }
    const userData = { email, password };

    setLoading(true);

    try {
      const response = await axiosInstance.post('/auth/login', userData);
      login(response.data);
    } catch (error) {
      console.log('login failed', error);
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-page-height flex items-center justify-center">
      <div className="container">
        <div className="w-full px-5 sm:px-10 py-10">
          {/* <LoginForm /> */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm rounded-md bg-white px-4 py-8 mx-auto shadow-lg flex flex-col gap-5"
          >
            <h1 className="text-primary-100 text-2xl sm:text-3xl font-semibold">
              {t('login')}
            </h1>
            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-customBlack-100 text-sm sm:text-base"
              >
                {t('mobile-number')}
              </label>
              <div className="group flex border-2 border-customBlack-100 rounded-md overflow-hidden focus-within:border-primary-100">
                <div className="border-r-2 border-customBlack-100 p-2 flex items-center justify-center group-focus-within:border-primary-100">
                  <p className="text-customBlack-100 text-sm sm:text-base">
                    +993
                  </p>
                </div>
                <input
                  id="number"
                  type="email"
                  className="w-full p-2 outline-none text-customBlack-100 text-sm sm:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // maxLength={8}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-customBlack-100 text-sm sm:text-base"
              >
                {t('password')}
              </label>
              <div className="group flex border-2 border-customBlack-100 rounded-md overflow-hidden focus-within:border-primary-100">
                <input
                  id="password"
                  type="text"
                  className="w-full p-2 outline-none text-customBlack-100 text-sm sm:text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-full p-2 flex items-center justify-center text-center text-white text-sm sm:text-base bg-primary-100 hover:bg-opacity-90 rounded-md transition-all"
              disabled={loading}
            >
              {/* Login */}
              {loading ? (
                <LuLoader2 className="animate-spin text-xl sm:text-2xl " />
              ) : (
                t('login')
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
