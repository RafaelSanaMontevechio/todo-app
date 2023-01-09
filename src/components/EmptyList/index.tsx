import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/clipboard.png')}
        style={styles.image}
      />
      <Text style={styles.message}>
        Você ainda não tem tarefas cadastradas {'\n'} Crie tarefas e organize
        seus itens a fazer
      </Text>
    </View>
  );
}
