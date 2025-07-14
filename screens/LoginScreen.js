// screens/LoginScreen.js

import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, Alert, ScrollView,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../constants/constants';
import Header from '../components/Header'; // 🧠 Make sure it's imported

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      await AsyncStorage.setItem('token', res.data.token);
      Alert.alert('Success', 'Login successful');
      navigation.replace('Main');
    } catch (err) {
      console.log('❌ Login error:', err.message);
      console.log('❌ Full error:', err.response?.data || err);
      Alert.alert('Login Failed', err.response?.data?.error || err.message || 'Something went wrong');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Login" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>🔐 Login</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          Don’t have an account? Register
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 30 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 10, borderRadius: 5 },
  link: { marginTop: 20, textAlign: 'center', color: '#E91E63' },
});
