import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import en from './locales/en.json';
import he from './locales/he.json';
import ru from './locales/ru.json';

// Default language
const initialLanguage = 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      he: { translation: he },
      ru: { translation: ru },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // React Native always syncs, don't cache
    react: {
      useSuspense: false,
    },
  });

export default i18n;