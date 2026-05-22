import { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Word {
  id: number;
  hebrew: string;
  transliteration: string;
  translation: string;
  type: string;
  isFavorite: boolean;
}

const initialWords: Word[] = [
  {
    id: 1,
    hebrew: 'שלום',
    transliteration: 'Шалом',
    translation: 'Привет / Мир',
    type: 'Существительное',
    isFavorite: true,
  },
  {
    id: 2,
    hebrew: 'בוקר',
    transliteration: 'Бокер',
    translation: 'Утро',
    type: 'Существительное',
    isFavorite: false,
  },
  {
    id: 3,
    hebrew: 'בית',
    transliteration: 'Байт',
    translation: 'Дом',
    type: 'Существительное',
    isFavorite: true,
  },
  {
    id: 4,
    hebrew: 'אכול',
    transliteration: 'Эхоль',
    translation: 'Есть (кушать)',
    type: 'Глагол',
    isFavorite: false,
  },
  {
    id: 5,
    hebrew: 'גדול',
    transliteration: 'Гадоль',
    translation: 'Большой',
    type: 'Прилагательное',
    isFavorite: false,
  },
];

export function WordList() {
  const [words, setWords] = useState<Word[]>(initialWords);

  const toggleFavorite = (id: number) => {
    setWords(words.map(word => 
      word.id === id ? { ...word, isFavorite: !word.isFavorite } : word,
    ));
  };

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" />
      
      <View className="flex-row justify-between items-center px-4 pt-4 pb-2">
        <Text className="text-xl font-semibold text-gray-800">Новые слова</Text>
        <TouchableOpacity>
          <Text className="text-blue-500 text-sm">Смотреть все</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex-1 p-4">
        {words.map((word) => (
          <View key={word.id} className="flex-row items-center bg-white rounded-xl p-4 mb-3 shadow-sm">
            <View className="w-16 h-16 bg-purple-50 rounded-full items-center justify-center mr-3">
              <Text className="text-2xl text-purple-600 font-medium">{word.hebrew}</Text>
            </View>
            
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <Text className="text-lg font-semibold text-gray-800 mr-2">{word.transliteration}</Text>
                <TouchableOpacity className="p-1">
                  <Text className="text-blue-400 text-lg">🔊</Text>
                </TouchableOpacity>
              </View>
              
              <Text className="text-gray-600 mb-1">{word.translation}</Text>
              <View className="bg-purple-100 rounded px-2 py-1 self-start">
                <Text className="text-purple-600 text-xs">{word.type}</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              onPress={() => toggleFavorite(word.id)}
              className="ml-2 p-1"
            >
              <Text className="text-yellow-400 text-2xl">
                {word.isFavorite ? '★' : '☆'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="ml-1 p-1">
              <Text className="text-gray-400 text-lg">⋮</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}