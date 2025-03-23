import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Register.styles';
import api from '../../utils/api';
import RegisterRequest from '../../models/RegisterRequest';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (loading) {
      return;
    }
    if(password !== confirmationPassword){
      Alert.alert("Error", "Password and confirmation password must be the same")
      return;
    }

    setLoading(true);
    try {
      const registerRequest = new RegisterRequest(
        password,
        confirmationPassword,
        firstname,
        lastname,
        email,
        phone,
        companyName,
        address
      );
      const response = await api.register(registerRequest);
      await api.setTokens(response);
      navigation.navigate('MainScreen');
    } catch (error) {
        if(error.message){
          Alert.alert("Error", error.message);
      console.error('Register failed:', error);
      Alert.alert('Error', JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmation Password"
        secureTextEntry
        value={confirmationPassword}
        onChangeText={setConfirmationPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Firstname"
        value={firstname}
        onChangeText={setFirstname}
      />

      <TextInput
        style={styles.input}
        placeholder="Lastname"
        value={lastname}
        onChangeText={setLastname}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone (Optional)"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Company Name (Optional)"
        value={companyName}
        onChangeText={setCompanyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Address (Optional)"
        value={address}
        onChangeText={setAddress}
      />

      <Button title="Register" onPress={handleRegister} disabled={loading}/>
      <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
    </ScrollView>
  );
};

export default Register;
