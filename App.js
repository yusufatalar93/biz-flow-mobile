import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { LogBox } from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
      <AppNavigator/>
  );
};

export default App;