import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';

const stats = [
  { key: 'total_words', value: '147', icon: '📚' },
  { key: 'lessons_completed', value: '23', icon: '✅' },
  { key: 'streak', value: '12', icon: '🔥' },
];

export  function ProgressStatus() {
  const { t } = useTranslation();

  return (
    <ThemedView className="flex-1">
      <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={{ padding: 16, justifyContent: 'center' }}>
        <Text className="text-2xl font-bold mb-6">{t('progress.title')}</Text>
        
        <View className="flex flex-col mb-6">
          {stats.map((stat) => (
            <View key={stat.key} className="flex-row  bg-purple-100 dark:bg-purple-900 rounded-lg p-4 mb-4 gap-2">
              <Text className="text-2xl mb-2">{stat.icon}</Text>
              <View >
                <ThemedText className="text-sm font-bold mb-2">{stat.value}</ThemedText>
                <ThemedText type="small" className="text-sm opacity-80">{t(`progress.${stat.key}`)}</ThemedText>
                </View>

            </View>
          ))}
        </View>

        <ThemedText className="text-lg mt-4 opacity-70">{t('progress.view_details')}</ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

