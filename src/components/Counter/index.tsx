import { Text, View } from 'react-native';

import { styles } from './styles';

interface CounterProps {
  text: string;
}

export function Counter({ text }: CounterProps) {
  return (
    <View style={styles.counter}>
      <Text style={styles.counterText}>{text}</Text>
    </View>
  );
}
