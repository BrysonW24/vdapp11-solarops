import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip, Button } from 'react-native-paper';

const timeline = [
  { id: 't1', phase: 'Design approved', date: 'Mar 06', status: 'Complete' },
  { id: 't2', phase: 'Materials allocated', date: 'Mar 10', status: 'Complete' },
  { id: 't3', phase: 'Install scheduled', date: 'Mar 18', status: 'Upcoming' },
  { id: 't4', phase: 'Inspection passed', date: 'Mar 28', status: 'Upcoming' },
];

export default function TimelineScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Install Timeline
        </Text>

        {timeline.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <View style={styles.row}>
                <Text variant="titleMedium">{item.phase}</Text>
                <Chip icon="calendar" compact>
                  {item.date}
                </Chip>
              </View>
              <Text variant="bodySmall" style={styles.mutedText}>
                Status: {item.status}
              </Text>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="calendar-clock">
          Schedule inspection
        </Button>
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
  card: {
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mutedText: {
    color: '#6B7280',
  },
});
