import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import MainScreen from '../screens/MainScreen/MainScreen';
import HomeScreen from '../screens/Home/HomeScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;