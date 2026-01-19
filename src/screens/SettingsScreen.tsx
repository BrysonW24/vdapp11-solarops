import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, List, Switch, Divider, Button } from 'react-native-paper';

export default function SettingsScreen() {
  const [inventoryAlerts, setInventoryAlerts] = useState(true);
  const [clientUpdates, setClientUpdates] = useState(true);
  const [mapPins, setMapPins] = useState(true);
  const [inspectionReminders, setInspectionReminders] = useState(true);
  const [photoUploads, setPhotoUploads] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Settings
        </Text>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Operations
          </Text>
          <List.Item
            title="Inventory alerts"
            description="Notify when stock is low"
            left={(props) => <List.Icon {...props} icon="warehouse" />}
            right={() => (
              <Switch
                value={inventoryAlerts}
                onValueChange={setInventoryAlerts}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Map visibility"
            description="Show completed installs on map"
            left={(props) => <List.Icon {...props} icon="map" />}
            right={() => (
              <Switch
                value={mapPins}
                onValueChange={setMapPins}
              />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Notifications
          </Text>
          <List.Item
            title="Client updates"
            description="Notify clients at key milestones"
            left={(props) => <List.Icon {...props} icon="account-group" />}
            right={() => (
              <Switch
                value={clientUpdates}
                onValueChange={setClientUpdates}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Inspection reminders"
            description="Alert crews before inspections"
            left={(props) => <List.Icon {...props} icon="calendar-check" />}
            right={() => (
              <Switch
                value={inspectionReminders}
                onValueChange={setInspectionReminders}
              />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Field updates
          </Text>
          <List.Item
            title="Photo uploads"
            description="Require photos before phase completion"
            left={(props) => <List.Icon {...props} icon="camera" />}
            right={() => (
              <Switch
                value={photoUploads}
                onValueChange={setPhotoUploads}
              />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            About
          </Text>
          <List.Item
            title="Version"
            description="1.0.0"
            left={(props) => <List.Icon {...props} icon="information" />}
          />
          <Divider />
          <List.Item
            title="Terms of Service"
            left={(props) => <List.Icon {...props} icon="file-document" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Terms of Service')}
          />
          <Divider />
          <List.Item
            title="Privacy Policy"
            left={(props) => <List.Icon {...props} icon="file-document" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Privacy Policy')}
          />
          <Divider />
        </View>

        <Button mode="contained" icon="help-circle-outline">
          Contact support
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
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#0F172A',
  },
});
