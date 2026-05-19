import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from 'react-native';

const stats = [
  { key: 'total_words', value: '147', icon: '📚', bg: 'bg-purple-100 dark:bg-purple-900' },
  { key: 'lessons_completed', value: '23', icon: '✅', bg: 'bg-blue-100 dark:bg-blue-900' },
  { key: 'streak', value: '12', icon: '🔥', bg: 'bg-green-100 dark:bg-green-900' },
];

export  function ProgressStatus() {
  const { t } = useTranslation();

  return (
    <ThemedView className="flex-1 flex-col">
      <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={{ padding: 16, justifyContent: 'center' }}>
        <ThemedText className="text-2xl font-bold mb-6">{t('progress.title')}</ThemedText>
        
        <View className="flex flex-row mb-6 gap-2">
          {stats.map((stat) => (
            <View key={stat.key} className={["flex-col justify-center items-center rounded-lg p-4 mb-4 gap-2", stat.bg].join(' ')}>
              <Text className="text-2xl mb-2">{stat.icon}</Text>
                <ThemedText className="text-sm font-bold mb-2">{stat.value}</ThemedText>
                <ThemedText type="small" className="text-sm opacity-80">{t(`progress.${stat.key}`)}</ThemedText>

            </View>
          ))}
        </View>

        <ThemedText className="text-lg mt-4 opacity-70">{t('progress.view_details')}</ThemedText>
      </ScrollView>
    </ThemedView>
  );
}
