import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Task } from '../../screens/Home';

import { styles } from './styles';

interface TaskCard {
  task: Task;
  onCheck: () => void;
  onDelete: () => void;
}

export function TaskCard({ task, onCheck, onDelete }: TaskCard) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.check} onPress={onCheck}>
        {task.status === 'open' ? (
          <Image source={require('../../../assets/check.png')} />
        ) : (
          <Image source={require('../../../assets/checked.png')} />
        )}
      </TouchableOpacity>

      <Text style={task.status === 'open' ? styles.task : styles.closedTask}>
        {task.task}
      </Text>

      <TouchableOpacity style={styles.trash} onPress={onDelete}>
        <Image
          source={require('../../../assets/trash.png')}
          style={styles.trashImage}
        />
      </TouchableOpacity>
    </View>
  );
}
