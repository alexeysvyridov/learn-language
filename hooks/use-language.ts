import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGE_KEY = 'selected_language';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    async (lng: string) => {
      await i18n.changeLanguage(lng);
      await AsyncStorage.setItem(LANGUAGE_KEY, lng);
    },
    [i18n],
  );

  return {
    language: i18n.language,
    changeLanguage,
  };
};
