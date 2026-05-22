import { Tabs } from 'expo-router';
import React from 'react';
import {
  View,
} from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useTranslation } from 'react-i18next';

type ColorScheme = 'light' | 'dark';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
 
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        initialRouteName="home/index"
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme as ColorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        <Tabs.Screen
          name="home/index"
          options={{
            title: t('tabs.home'),
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="lessons/index"
          options={{
            title: t('tabs.lessons'),
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="words"
          options={{
            title: t('tabs.words'),
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="bookmark.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: t('tabs.profile'),
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
          }}
        />
      </Tabs>


    </View>
  );
}