import { Text, View } from 'react-native';

import { Task } from '../../screens/Home';

import { styles } from './styles';

interface TaskCard {
  task: Task;
}

export function TaskCard({ task }: TaskCard) {
  return (
    <View style={styles.container}>
      <Text>{task.task}</Text>
    </View>
  );
}
