// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
         <Header title="Profile" />
         <View style={styles.body}>
            <Text style={styles.text}>👤 Profile Screen</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});


