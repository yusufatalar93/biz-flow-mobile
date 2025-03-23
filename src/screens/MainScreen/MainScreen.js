import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PagerView from 'react-native-pager-view';
import Login from '../Login/Login';
import Register from '../Register/Register';

const MainScreen = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  const onPageSelected = (event) => {
    setSelectedPage(event.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={selectedPage.toString()}
        editable={false}
      />
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={onPageSelected}
      >
        <View key="1"><Login /></View>
        <View key="2"><Register /></View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  pagerView: {
    flex: 1,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom:10,
  },
});

export default MainScreen;