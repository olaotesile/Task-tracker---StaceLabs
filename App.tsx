import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native'
import { useTasks } from './hooks/useTasks'
import TaskInput from './components/TaskInput'
import FilterBar from './components/FilterBar'
import TaskItem from './components/TaskItem'

export default function App() {
  const { tasks, filter, setFilter, addTask, toggleTask, deleteTask } = useTasks()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />

      <Text style={styles.heading}>Task Tracker</Text>
      <Text style={styles.subheading}>Stace Labs</Text>

      <TaskInput onAdd={addTask} />

      <FilterBar current={filter} onChange={setFilter} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No tasks yet. Add tasks</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  empty: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    color: '#555',
    fontSize: 15,
  },
  subheading: {
    fontSize: 12,
    color: '#22c55e',
    paddingHorizontal: 16,
    marginTop: -6,
    marginBottom: 4,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
})