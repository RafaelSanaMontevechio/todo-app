import { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Counter } from '../../components/Counter';

import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';

import { styles } from './styles';

export interface Task {
  id: string;
  task: string;
  status: 'open' | 'closed';
}

export function Home() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      task: 'teste',
      status: 'open',
    },
    {
      id: '2',
      task: 'teste 2',
      status: 'open',
    },
  ]);

  function handleAddNewTask() {}
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.wrapper}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione a nova tarefa"
            placeholderTextColor="#6b6b6b"
            value={newTask}
            onChangeText={setNewTask}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <View style={styles.created}>
            <Text style={styles.createdText}>Criadas</Text>

            <Counter text={tasks.length.toString()} />
          </View>

          <View style={styles.done}>
            <Text style={styles.doneText}>Criadas</Text>

            <Counter text="0" />
          </View>
        </View>

        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TaskCard task={item} />}
          ListEmptyComponent={() => <Text>No tasks</Text>}
        />
      </View>
    </View>
  );
}
