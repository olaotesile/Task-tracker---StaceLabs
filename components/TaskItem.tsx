import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Task } from '../types'

interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.container} onPress={() => onToggle(task.id)}>
        <View style={[styles.circle, task.completed && styles.circleCompleted]} />
        <Text style={[styles.title, task.completed && styles.titleCompleted]}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteBtn}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#22c55e',
    marginRight: 12,
  },
  circleCompleted: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  title: {
    fontSize: 16,
    color: '#f5f5f5',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  deleteBtn: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  deleteText: {
    color: '#666',
    fontSize: 16,
  },
})