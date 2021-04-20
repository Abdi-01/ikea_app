import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import { useDispatch } from 'react-redux';
import { onKeepLogin } from '../actions';

const Stack = createStackNavigator()
const StackNavigation = (props) => {
    const dispatch = useDispatch()
    // fungsi keeplogin
    // 
    useEffect(() => {
        dispatch(onKeepLogin())
    }, [])
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigation