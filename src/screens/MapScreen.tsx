import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip, Button } from 'react-native-paper';

const jobPins = [
  { id: 'pin-1', name: 'Hillcrest Estate', status: 'Active' },
  { id: 'pin-2', name: 'Northside Logistics', status: 'Design' },
  { id: 'pin-3', name: 'Meadowbrook Villas', status: 'Complete' },
];

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Jobs Map
        </Text>

        <View style={styles.mapPlaceholder}>
          <Text variant="titleMedium">Live map preview</Text>
          <Text variant="bodySmall" style={styles.mutedText}>
            Active installs, completed sites, and upcoming inspections
          </Text>
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Pinned jobs</Text>
            {jobPins.map((pin) => (
              <View key={pin.id} style={styles.pinRow}>
                <Text variant="bodyMedium">{pin.name}</Text>
                <Chip icon="map-marker" compact>
                  {pin.status}
                </Chip>
              </View>
            ))}
            <Button mode="outlined" icon="filter">
              Filter map
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
    fontWeight: '700',
  },
  mapPlaceholder: {
    height: 220,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  pinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  mutedText: {
    color: '#6B7280',
  },
});
