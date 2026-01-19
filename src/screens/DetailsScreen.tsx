import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Chip, Divider, Card } from 'react-native-paper';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'JobDetails'>;

const phases = [
  'Design approved',
  'Materials allocated',
  'Install scheduled',
  'Install complete',
  'Inspection passed',
];

export default function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();

  const { id, name, phase, systemSize, status } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.title}>
            {name}
          </Text>
          <Text variant="bodyMedium" style={styles.mutedText}>
            {phase} • {systemSize || 'System size TBD'}
          </Text>
          <View style={styles.tagsContainer}>
            <Chip icon="solar-power" mode="outlined" style={styles.tagChip}>
              {systemSize || 'Pending'}
            </Chip>
            <Chip icon="progress-check" mode="outlined" style={styles.tagChip}>
              {status || 'On track'}
            </Chip>
            <Chip icon="map-marker" mode="outlined" style={styles.tagChip}>
              Job ID {id}
            </Chip>
          </View>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Install phase checklist
          </Text>
          {phases.map((item) => (
            <View key={item} style={styles.listRow}>
              <Text variant="bodyMedium">{item}</Text>
              <Chip icon={item === phase ? 'progress-check' : 'check-circle-outline'} compact>
                {item === phase ? 'Current' : 'Done'}
              </Chip>
            </View>
          ))}
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Latest updates
          </Text>
          <Card style={styles.updateCard}>
            <Card.Content>
              <Text variant="bodyMedium">
                Materials allocated: 24 panels, 2 inverters.
              </Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                Today • Inventory team
              </Text>
            </Card.Content>
          </Card>
          <Card style={styles.updateCard}>
            <Card.Content>
              <Text variant="bodyMedium">
                Client approved design layout.
              </Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                Yesterday • Client portal
              </Text>
            </Card.Content>
          </Card>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.actions}>
          <Button mode="contained" icon="camera" style={styles.actionButton}>
            Upload site photos
          </Button>
          <Button mode="outlined" icon="clipboard-check-outline" style={styles.actionButton}>
            Request approval
          </Button>
          <Button mode="text" onPress={() => navigation.goBack()}>
            Back to jobs
          </Button>
        </View>
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
    paddingBottom: 32,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 6,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    backgroundColor: '#fff',
  },
  tagChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  divider: {
    marginVertical: 8,
  },
  section: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    marginBottom: 12,
    color: '#0F172A',
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  updateCard: {
    marginBottom: 12,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  actions: {
    padding: 16,
  },
  actionButton: {
    marginBottom: 10,
  },
});
