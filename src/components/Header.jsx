import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Context';

import { useTranslation } from 'react-i18next';

import { FaChevronLeft, FaGlobe, FaSignInAlt, FaUser } from 'react-icons/fa';

const Header = () => {
  const { isAuth, language, changeLanguage, user } = useContext(AppContext);

  const { t } = useTranslation();

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <nav className="fixed top-0 left-0 z-40 w-full bg-white border-b-2 border-primary-100">
        <div className="container">
          <div className="w-full px-5 sm:px-10 py-3 flex items-center justify-start sm:justify-between gap-4">
            {location.pathname.includes('/home') ? null : (
              <button
                onClick={() => navigate(-1)}
                className="block sm:hidden text-customBlack-100 hover:text-primary-100 transition-all"
              >
                <FaChevronLeft />
              </button>
            )}

            {/* logo */}
            <Link to={'/home'}>
              <h1 className="text-xl font-semibold">
                <span className="text-primary-100">DI</span>
                <span className="text-primary-200">NAM</span>
                <span className="text-primary-300">ICA</span>
              </h1>
            </Link>

            {/* menu */}

            <div className="hidden sm:flex items-center justify-end gap-4">
              {isAuth ? (
                <Link to={'/schedule'}>
                  <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-md font-semibold text-base bg-primary-100 text-white hover:bg-opacity-90 transition-all">
                    <FaUser />
                    {user.name} {user.surname}
                  </div>
                </Link>
              ) : (
                <Link to={'/login'}>
                  <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-md font-semibold text-base bg-primary-100 text-white hover:bg-opacity-90 transition-all">
                    <FaSignInAlt />
                    {t('login')}
                  </div>
                </Link>
              )}
              <div className="group relative py-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-md font-semibold text-base bg-primary-100 text-white group-hover:bg-opacity-90 transition-all">
                  <FaGlobe />
                </button>
                <div className="absolute top-20 group-hover:top-14 -left-3 bg-white shadow-lg border-2 border-primary-100 rounded-md p-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                  <button
                    onClick={() => handleLanguageChange('tm')}
                    className={
                      language === 'tm'
                        ? 'w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md bg-primary-100 text-white transition-all'
                        : 'w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md hover:bg-primary-100 text-primary-100 hover:text-white transition-all'
                    }
                  >
                    Tm
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ru')}
                    className={
                      language === 'ru'
                        ? 'w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md bg-primary-100 text-white transition-all'
                        : 'w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md hover:bg-primary-100 text-primary-100 hover:text-white transition-all'
                    }
                  >
                    Ru
                  </button>
                  {/* <button
                    onClick={() => handleLanguageChange('en')}
                    className={
                      language === 'en'
                        ? 'w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md bg-primary-100 text-white transition-all'
                        : 'w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md hover:bg-primary-100 text-primary-100 hover:text-white transition-all'
                    }
                  >
                    En
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
