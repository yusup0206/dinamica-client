import { useState } from 'react';
import {
  FaBell,
  FaCalendarAlt,
  FaCreditCard,
  FaGlobe,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import LanguageModal from './LanguageModal';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const location = useLocation();
  const [languageModal, setLanguageModal] = useState(false);

  const toggleLanguageModal = () => setLanguageModal(!languageModal);

  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-white rounded-md p-4 shadow-md flex items-center justify-between gap-4">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="w-14 h-14 min-w-14 bg-gray-100 rounded-md overflow-hidden">
            {/* <img src="" alt="" className="w-full h-full" /> */}
          </div>
          <div className="">
            <h4 className="text-customBlack-100 text-base sm:text-lg font-semibold">
              Username
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
        <button
          onClick={toggleLanguageModal}
          className="w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-white hover:bg-gray-50 transition-all"
        >
          <div className="text-xl">
            <FaGlobe />
          </div>
          <p className="text-sm sm:text-base">{t('language')}</p>
        </button>
        <button className="w-full flex items-center justify-start gap-3 p-4 text-customBlack-100 rounded-md bg-white hover:bg-gray-50 transition-all">
          <div className="text-xl">
            <FaSignOutAlt />
          </div>
          <p className="text-sm sm:text-base">{t('logout')}</p>
        </button>
      </div>
      <LanguageModal isOpen={languageModal} onClose={toggleLanguageModal} />
    </>
  );
};

export default Menu;
