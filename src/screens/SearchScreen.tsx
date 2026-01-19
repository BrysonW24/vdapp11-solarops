import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Searchbar, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const JOBS = [
  {
    id: 'so-201',
    name: 'Hillcrest Estate',
    phase: 'Install scheduled',
    systemSize: '6.6kW',
    status: 'Crew assigned',
  },
  {
    id: 'so-202',
    name: 'Northside Logistics',
    phase: 'Design approved',
    systemSize: '120kW',
    status: 'Materials allocated',
  },
  {
    id: 'so-203',
    name: 'Meadowbrook Villas',
    phase: 'Inspection passed',
    systemSize: '10kW',
    status: 'Handover ready',
  },
];

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = JOBS.filter(
    (job) =>
      job.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.phase.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayData = searchQuery ? filteredData : JOBS;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search jobs, phases, sites..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <FlatList
        data={displayData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          searchQuery === '' ? (
            <View style={styles.header}>
              <Text variant="titleLarge">Active installs</Text>
              <Text variant="bodyMedium" style={styles.emptyText}>
                Track progress by phase and crew
              </Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.name}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                {item.phase} • {item.status}
              </Text>
              <View style={styles.tagRow}>
                <Chip icon="solar-power" compact style={styles.tagChip}>
                  {item.systemSize}
                </Chip>
                <Chip icon="progress-check" compact style={styles.tagChip}>
                  {item.phase}
                </Chip>
              </View>
              <Button
                mode="contained"
                onPress={() =>
                  navigation.navigate('JobDetails', {
                    id: item.id,
                    name: item.name,
                    phase: item.phase,
                    systemSize: item.systemSize,
                    status: item.status,
                  })
                }
              >
                Open job
              </Button>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text variant="titleLarge">No Results</Text>
            <Text variant="bodyMedium">
              No jobs match your search query
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    margin: 16,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
  header: {
    marginBottom: 12,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  tagRow: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tagChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    marginTop: 8,
    textAlign: 'center',
  },
});
