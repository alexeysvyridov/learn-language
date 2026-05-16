import { View } from "react-native";

export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 bg-gray-100 dark:bg-gray-900 ">
       {children}
    </View>
  );
}