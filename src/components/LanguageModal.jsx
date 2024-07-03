import { FaXmark } from 'react-icons/fa6';
import i18n from '../i18n';

// eslint-disable-next-line react/prop-types
const LanguageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onClose(); // Close the modal after changing the language
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-md p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between gap-4 mb-8">
          <h4 className="text-customBlack-100 text-base sm:text-lg font-semibold">
            Select a language
          </h4>
          <button onClick={onClose} className="text-primary-100">
            <FaXmark />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => changeLanguage('tm')}
            className="w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md bg-primary-100 text-white transition-all"
          >
            Turkmen
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className="w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md hover:bg-primary-100 text-primary-100 hover:text-white transition-all"
          >
            Russian
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="w-full border-2 border-primary-100 text-sm sm:text-base text-center font-semibold p-3 rounded-md hover:bg-primary-100 text-primary-100 hover:text-white transition-all"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
