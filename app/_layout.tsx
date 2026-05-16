import { LanguageModal } from '@/components/Modals/LanguageModal';
import i18n from '@/src/i18n/i18n';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { createContext, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useLanguage } from '@/hooks/use-language';
import { Ionicons } from '@expo/vector-icons';
import {
  Text,
  TouchableOpacity
} from 'react-native';

const RTLContext = createContext(false);

function RootContent() {
  const colorScheme = useColorScheme();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const languages = [
    { code: 'en', name: t('common.english'), flag: '🇺🇸', direction: 'ltr' as const },
    { code: 'he', name: t('common.hebrew'), flag: '🇮🇱', direction: 'rtl' as const },
    { code: 'ru', name: t('common.russian'), flag: '🇷🇺', direction: 'ltr' as const },
  ];

  const currentLang = languages.find((l) => l.code === language);

  const headerTitle = currentLang
    ? `${t('common.select_language')}: ${currentLang.flag} ${currentLang.name}`
    : t('common.select_language');



  return (

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerRight: ()  => (
                  <TouchableOpacity
                    onPress={() => setShowLanguageModal(true)}
                    className={currentLang ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'}
                    activeOpacity={0.7}>  
                    <Ionicons
                      name={language === 'he' ? 'language' : 'language'}
                      size={20}
                      color={colorScheme === 'dark' ? '#fff' : '#000'}
                    />
                    <Text style={[{ color: colorScheme === 'dark' ? '#fff' : '#000' }]}>
                      {currentLang ? `${currentLang.flag} ${currentLang.name}` : headerTitle}
                    </Text>
                  </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>

     <LanguageModal language={language} languages={languages} onChangeLanguage={changeLanguage} showLanguageModal={showLanguageModal} setShowLanguageModal={setShowLanguageModal} />
      <StatusBar style="auto"  />
    </ThemeProvider>
  );
}

export default function RootLayout() {
    const { language } = useLanguage();
    const isRTL = language === 'he';

  return (
    <I18nextProvider i18n={i18n}>
          <RTLContext.Provider value={isRTL}>
              <RootContent />
          </RTLContext.Provider>
    </I18nextProvider>
  );
}

