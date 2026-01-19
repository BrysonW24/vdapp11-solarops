import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Avatar, List, Divider } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Icon size={80} icon="account" />
        <Text variant="headlineSmall" style={styles.name}>
          User Name
        </Text>
        <Text variant="bodyMedium" style={styles.email}>
          user@example.com
        </Text>
      </View>

      <Divider />

      <View style={styles.section}>
        <List.Item
          title="Edit Profile"
          description="Update your personal information"
          left={(props) => <List.Icon {...props} icon="account-edit" />}
          onPress={() => {}}
        />
        <List.Item
          title="Settings"
          description="App preferences and configuration"
          left={(props) => <List.Icon {...props} icon="cog" />}
          onPress={() => {}}
        />
        <List.Item
          title="Notifications"
          description="Manage notification preferences"
          left={(props) => <List.Icon {...props} icon="bell" />}
          onPress={() => {}}
        />
        <List.Item
          title="Privacy"
          description="Privacy and security settings"
          left={(props) => <List.Icon {...props} icon="shield-account" />}
          onPress={() => {}}
        />
        <List.Item
          title="Help & Support"
          description="Get help and contact support"
          left={(props) => <List.Icon {...props} icon="help-circle" />}
          onPress={() => {}}
        />
        <List.Item
          title="About"
          description="App version and information"
          left={(props) => <List.Icon {...props} icon="information" />}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
  name: {
    marginTop: 12,
  },
  email: {
    marginTop: 4,
    color: '#666',
  },
  section: {
    backgroundColor: 'white',
    marginTop: 8,
  },
});
