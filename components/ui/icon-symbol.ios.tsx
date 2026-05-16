import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

export type IconSymbolName = 'house.fill' | 'paperplane.fill' | 'chevron.left.forwardslash.chevron.right' | 'chevron.right' | 'book.fill' | 'bookmark.fill' | 'chart.bar.fill' | 'person.fill';

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name as SymbolViewProps['name']}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
