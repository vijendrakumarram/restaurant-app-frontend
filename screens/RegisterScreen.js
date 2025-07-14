// screens/RegisterScreen.js

import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, Alert, ScrollView,
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '../constants/constants';
import Header from '../components/Header'; // ✅ Import reusable Header

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
      });
      Alert.alert('Success', 'Registration successful. Please log in.');
      navigation.navigate('Login');
    } catch (err) {
      console.log('❌ Register Error:', err.response?.data || err.message);
      Alert.alert('Registration Failed', err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Register" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>📝 Register</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
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
        <Button title="Register" onPress={handleRegister} />
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Already have an account? Login
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
