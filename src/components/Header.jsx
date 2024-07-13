import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/Context';

import { useTranslation } from 'react-i18next';

import { FaSignInAlt, FaUser } from 'react-icons/fa';

const Header = () => {
  const { isAuth } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <header>
      <nav className="fixed top-0 left-0 z-40 w-full bg-white border-b-2 border-primary-100">
        <div className="container">
          <div className="w-full px-5 sm:px-10 py-5 flex items-center justify-between gap-4">
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
                    Aman Amanow
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
