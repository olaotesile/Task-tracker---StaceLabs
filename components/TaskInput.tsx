import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
  onAdd: (title: string) => void
}

export default function TaskInput({ onAdd }: Props) {
  const [text, setText] = useState('')

  function handleAdd() {
    if (text.trim() === '') return
    onAdd(text.trim())
    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What's your task?"
        placeholderTextColor="#555"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  button: {
    backgroundColor: '#22c55e',
    borderRadius: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0f0f0f',
    fontWeight: '700',
    fontSize: 15,
  },
})