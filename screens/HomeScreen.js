// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.body}>
        <Text style={styles.text}>🏠 Welcome to the Home Screen</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});