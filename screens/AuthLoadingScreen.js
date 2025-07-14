import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      setTimeout(() => {
        if (token) {
          navigation.replace('Main'); // ✅ User is logged in
        } else {
          navigation.replace('Login'); // 🔒 Not logged in
        }
      }, 2500); // Show splash for 2.5 seconds
    };

    checkToken();
  }, []);

  return (
    <View style={styles.container}>
       <Image
        source={require('../assets/splash.jpg')} // ✅ Put your splash.png in assets/
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
