import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Task } from '../types'

const STORAGE_KEY = 'tasks'

export type Filter = 'All' | 'Active' | 'Completed'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>('All')

  // To load tasks from storage 
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(data => {
      if (data) setTasks(JSON.parse(data))
    })
  }, [])

  // Save tasks to storage whenever there's a change
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    }
    setTasks(prev => [newTask, ...prev])
  }

  function toggleTask(id: string) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function deleteTask(id: string) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return { tasks: filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask }
}