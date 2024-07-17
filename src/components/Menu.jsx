// modules
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../context/Context';

// components
// import LanguageModal from './LanguageModal';

// language
import { useTranslation } from 'react-i18next';

// icons
import {
  FaBell,
  FaCalendarAlt,
  FaCreditCard,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa';

const Menu = () => {
  const { logout, user } = useContext(AppContext);

  const location = useLocation();
  // const [languageModal, setLanguageModal] = useState(false);

  // const toggleLanguageModal = () => setLanguageModal(!languageModal);

  const { t } = useTranslation();

  const handelLogaout = () => {
    logout();
  };

  return (
    <>
      <div className="w-full bg-white rounded-md p-4 shadow-md flex items-center justify-between gap-4">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="w-14 h-14 min-w-14 bg-gray-100 rounded-md overflow-hidden">
            {user.avatar == null ? (
              <div className="w-full h-full flex items-center justify-center text-xl text-customBlack-100">
                <FaUser className="" />
              </div>
            ) : (
              <img
                src={user.avatar}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="">
            <h4 className="text-customBlack-100 text-base sm:text-lg font-semibold">
              {user.name} {user.surname}
            </h4>
          </div>
        </div>
        <a
          href="./profile.html"
          className="text-customBlack-100 hover:text-primary-100 transition-all"
        ></a>
      </div>

      <div className="w-full bg-white rounded-md shadow-md flex flex-col ">
        <Link to={'/schedule'}>
          <div
            className={
              location.pathname.includes('/schedule')
                ? 'w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-gray-50'
                : 'w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-white hover:bg-gray-50 transition-all'
            }
          >
            <div className="text-xl">
              <FaCalendarAlt />
            </div>
            <p className="text-sm sm:text-base">{t('schedule')}</p>
          </div>
        </Link>
        <Link to={'/payments'}>
          <div
            className={
              location.pathname.includes('/payments')
                ? 'w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-gray-50'
                : 'w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-white hover:bg-gray-50 transition-all'
            }
          >
            <div className="text-xl">
              <FaCreditCard />
            </div>
            <p className="text-sm sm:text-base">{t('payments')}</p>
          </div>
        </Link>
        <Link to={'/messages'}>
          <div
            className={
              location.pathname.includes('/messages')
                ? 'w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-gray-50'
                : 'w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-white hover:bg-gray-50 transition-all'
            }
          >
            <div className="text-xl">
              <FaBell />
            </div>
            <p className="text-sm sm:text-base">{t('messages')}</p>
          </div>
        </Link>
        {/* <button
          onClick={toggleLanguageModal}
          className="w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-white hover:bg-gray-50 transition-all"
        >
          <div className="text-xl">
            <FaGlobe />
          </div>
          <p className="text-sm sm:text-base">{t('language')}</p>
        </button> */}
        <button
          onClick={handelLogaout}
          className="w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-white hover:bg-gray-50 transition-all"
        >
          <div className="text-xl">
            <FaSignOutAlt />
          </div>
          <p className="text-sm sm:text-base">{t('logout')}</p>
        </button>
      </div>
      {/* <LanguageModal isOpen={languageModal} onClose={toggleLanguageModal} /> */}
    </>
  );
};

export default Menu;
