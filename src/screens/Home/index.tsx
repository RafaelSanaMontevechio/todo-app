import { useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import uuid from 'react-native-uuid';

import { Counter } from '../../components/Counter';
import { EmptyList } from '../../components/EmptyList';

import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';

import { styles } from './styles';

type TaskStatus = 'open' | 'closed';
export interface Task {
  id: string;
  task: string;
  status: TaskStatus;
}

export function Home() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddNewTask() {
    if (newTask.length === 0) {
      return Alert.alert('Nova tarefa', 'A nova tarefa não pode ser em branco');
    }

    const task = {
      id: uuid.v4().toString(),
      task: newTask,
      status: 'open' as TaskStatus,
    };

    setTasks((state) => [...state, task]);
    setNewTask('');
  }

  function handleCheckTask(taskId: string) {
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
      return Alert.alert('Marcar tarefa', 'Tarefa não encontrada');
    }

    const tasksCopy = tasks;

    if (task.status === 'open') {
      task.status = 'closed';
    } else {
      task.status = 'open';
    }

    tasksCopy.splice(tasksCopy.indexOf(task), 0);
    setTasks([...tasksCopy]);
  }

  function handleDeleteTask(taskId: string) {
    Alert.alert('Remover tarefa', `Deseja remover esta tarefa?`, [
      {
        text: 'Sim',
        onPress: () => onDelete(taskId),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function onDelete(taskId: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  const finishedTasks = tasks.reduce((acc, task) => {
    if (task.status === 'closed') {
      acc++;
    }

    return acc;
  }, 0);
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
            <Text style={styles.doneText}>Concluídas</Text>

            <Counter text={finishedTasks.toString()} />
          </View>
        </View>

        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onCheck={() => handleCheckTask(item.id)}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
}
