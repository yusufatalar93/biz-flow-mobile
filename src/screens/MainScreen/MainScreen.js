import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './MainScreen.styles';

const MainScreen = () => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Main Screen</Text>
        </View>
      </ScrollView>
  );
};

export default MainScreen;
