import { GoHome, GoHomeFill, GoPerson, GoPersonFill } from 'react-icons/go';
import { HiGlobeAlt, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { IoNewspaper, IoNewspaperOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import LanguageModal from './LanguageModal';
import { useState } from 'react';

const Footer = () => {
  const [languageModal, setLanguageModal] = useState(false);

  const toggleLanguageModal = () => setLanguageModal(!languageModal);

  const location = useLocation();
  return (
    <>
      <footer className="fixed sm:static bottom-0 left-0 w-full border-t-2 border-primary-100 bg-white">
        <div className="container">
          <div className="w-full px-10 py-5 text-center hidden sm:flex items-center justify-center">
            <p className="text-customBlack-100 text-base">
              dinamica &copy;2024
            </p>
          </div>
          <div className="w-full flex sm:hidden items-center justify-around  px-5 py-5">
            <Link to={'/home'}>
              <div className="text-primary-100 text-2xl">
                {location.pathname.includes('home') ? (
                  <GoHomeFill />
                ) : (
                  <GoHome />
                )}
              </div>
            </Link>
            <Link to={'/blog'}>
              <div className="text-primary-100 text-2xl">
                {location.pathname.includes('blog') ? (
                  <IoNewspaper />
                ) : (
                  <IoNewspaperOutline />
                )}
              </div>
            </Link>
            <Link to={'/menu'}>
              <div className="text-primary-100 text-2xl">
                {location.pathname.includes('menu') ? (
                  <GoPersonFill />
                ) : (
                  <GoPerson />
                )}
              </div>
            </Link>
            <button
              onClick={toggleLanguageModal}
              className="text-primary-100 text-2xl"
            >
              {languageModal ? <HiGlobeAlt /> : <HiOutlineGlobeAlt />}
            </button>
          </div>
        </div>
      </footer>
      <LanguageModal isOpen={languageModal} onClose={toggleLanguageModal} />
    </>
  );
};

export default Footer;
