import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip, Button } from 'react-native-paper';

const inventory = [
  { id: 'inv-1', item: 'Solar panels 440W', stock: 86, status: 'Low stock' },
  { id: 'inv-2', item: 'Inverters 5kW', stock: 24, status: 'Allocated' },
  { id: 'inv-3', item: 'Mounting kits', stock: 140, status: 'Healthy' },
];

export default function InventoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Inventory
        </Text>

        {inventory.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.item}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                Stock on hand: {item.stock}
              </Text>
              <View style={styles.chipRow}>
                <Chip icon="warehouse" compact>
                  {item.status}
                </Chip>
              </View>
              <Button mode="outlined" icon="package-variant-closed">
                Allocate to job
              </Button>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="alert-circle-outline">
          Set low stock alerts
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
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  chipRow: {
    marginVertical: 12,
  },
});
