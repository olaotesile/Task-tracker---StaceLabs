import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Filter } from '../hooks/useTasks'

interface Props {
  current: Filter
  onChange: (filter: Filter) => void
}

export default function FilterBar({ current, onChange }: Props) {
  const filters: Filter[] = ['All', 'Active', 'Completed']

  return (
    <View style={styles.container}>
      {filters.map(filter => (
        <TouchableOpacity
          key={filter}
          style={[styles.tab, current === filter && styles.activeTab]}
          onPress={() => onChange(filter)}
        >
          <Text style={[styles.label, current === filter && styles.activeLabel]}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  activeTab: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  label: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeLabel: {
    color: '#0f0f0f',
    fontWeight: '700',
  },
})