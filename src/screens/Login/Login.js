import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './Login.styles';
import api from '../../utils/api';
import LoginRequest from '../../models/LoginRequest';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const loginRequest = new LoginRequest(email, password);
      const response = await api.login(loginRequest);
      console.log('Login successful:', response);
      Alert.alert("Success", "Login successful");
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Error', JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} disabled={loading}/>
    </View>
  );
};

export default Login;
