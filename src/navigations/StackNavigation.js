import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const Stack = createStackNavigator()
const StackNavigation = (props) => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigation