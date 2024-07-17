// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
// import translationEN from './translations/en/global.json';
import translationRU from './translations/ru/global.json';
import translationTM from './translations/tm/global.json';

// the translations
const resources = {
  // en: {
  //   translation: translationEN,
  // },
  ru: {
    translation: translationRU,
  },
  tm: {
    translation: translationTM,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'tm', // default language
    fallbackLng: 'ru', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
