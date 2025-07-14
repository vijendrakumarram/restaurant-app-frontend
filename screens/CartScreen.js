// screens/CartScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function CartScreen() {
  return (
    <View style={styles.container}>
        <Header title="Cart" />
        <View style={styles.body}>
            <Text style={styles.text}>🛒 Cart Screen</Text>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});




