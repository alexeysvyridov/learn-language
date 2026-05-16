import { LanguageModal } from '@/components/Modals/LanguageModal';
import i18n from '@/src/i18n/i18n';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useLanguage } from '@/hooks/use-language';
import { Ionicons } from '@expo/vector-icons';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

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

  // Handle RTL layout for Hebrew
  useEffect(() => {
    if (language === 'he') {
      Platform.constants &&
        Object.defineProperty(Platform.constants, 'isRTL', {
          get: () => true,
        });
    }
  }, [language]);

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

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18n}>
      <RootContent />
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  headerLanguageSelector: {
    marginRight: 16,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  headerLanguageText: {
    fontSize: 12,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '80%',
    maxWidth: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  languageList: {
    gap: 12,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 12,
  },
  selectedLanguageOption: {
    backgroundColor: 'rgba(0,122,255,0.1)',
  },
  languageFlag: {
    fontSize: 24,
  },
  languageName: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  selectedLanguageText: {
    fontWeight: '700',
    color: '#007AFF',
  },
  modalCloseButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalCloseText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
});
