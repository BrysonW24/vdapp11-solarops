import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const activeJobs = [
  { id: 'so-201', name: 'Hillcrest Estate', phase: 'Install scheduled' },
  { id: 'so-202', name: 'Northside Logistics', phase: 'Design approved' },
];

const inventoryAlerts = [
  { id: 'inv-1', item: 'Panels - 6.6kW', status: 'Low stock' },
  { id: 'inv-2', item: 'Inverters - 5kW', status: 'Allocated' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          SolarOps
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Today’s operations</Text>
            <View style={styles.chipRow}>
              <Chip icon="solar-power" style={styles.chip}>
                5 installs active
              </Chip>
              <Chip icon="warehouse" style={styles.chip}>
                2 stock alerts
              </Chip>
              <Chip icon="calendar-clock" style={styles.chip}>
                3 inspections booked
              </Chip>
            </View>
            <Button
              mode="contained"
              icon="briefcase"
              onPress={() => navigation.navigate('Main', { screen: 'Jobs' })}
            >
              View jobs
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Active jobs</Text>
            {activeJobs.map((job) => (
              <View key={job.id} style={styles.listRow}>
                <View>
                  <Text variant="bodyLarge">{job.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {job.phase}
                  </Text>
                </View>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate('JobDetails', {
                      id: job.id,
                      name: job.name,
                      phase: job.phase,
                    })
                  }
                >
                  Open
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Inventory watch</Text>
            {inventoryAlerts.map((item) => (
              <View key={item.id} style={styles.listRow}>
                <Text variant="bodyMedium">{item.item}</Text>
                <Chip icon="alert-circle-outline">{item.status}</Chip>
              </View>
            ))}
            <Button mode="outlined" icon="warehouse">
              Review inventory
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
  card: {
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
});
