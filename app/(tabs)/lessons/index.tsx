import { ScrollView, Text } from 'react-native';

import { ThemedView } from '@/components/themed-view';

export default function LessonsScreen() {
  return (
    <ThemedView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>
        <Text className="text-2xl font-bold mb-4">Уроки</Text>
        <Text className="text-base">Your lessons will appear here</Text>
      </ScrollView>
    </ThemedView>
  );
}
