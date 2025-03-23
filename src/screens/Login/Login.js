import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Login.styles';
import api from '../../utils/api';
import LoginRequest from '../../models/LoginRequest';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const loginRequest = new LoginRequest(email, password);
      const response = await api.login(loginRequest);
      await api.setTokens(response.access_token, response.refresh_token);
      navigation.navigate('MainScreen');

    } catch (error) {
      if(error.message)
        Alert.alert('Error', error.message);
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
      
      {/* Register Sayfasına Geçiş Butonu */}
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />

      {loading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}

    </View>
  );
};

export default Login;
