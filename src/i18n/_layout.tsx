import i18n from '@/src/i18n/i18n';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { I18nextProvider } from 'react-i18next';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useLanguage } from '@/hooks/use-language';
import { Ionicons } from '@expo/vector-icons';
import { Alert, TouchableOpacity } from 'react-native';

function RootContent() {
  const colorScheme = useColorScheme();
  const { changeLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const languages = [
      { label: 'English', value: 'en' },
      { label: 'Русский', value: 'ru' },
    ];

    Alert.alert(
      'Select Language',
      'Choose your preferred language',
      [
        ...languages.map(lang => ({
          text: lang.label,
          onPress: () => changeLanguage(lang.value),
        })),
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel' as const,
        },
      ],
    );
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={handleLanguageChange} style={{ marginRight: 16 }}>
                <Ionicons name="globe" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
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