import { ScrollView, Text } from 'react-native';

import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
  return (
    <ThemedView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16, justifyContent: 'center' }}>
        <Text className="text-2xl font-bold mb-4">Профиль</Text>
        <Text className="text-base">Your profile information will appear here</Text>
      </ScrollView>
    </ThemedView>
  );
}
