import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../pages/login';
import RegisPage from '../pages/regis';
import DetailPage from '../pages/detail';
import TabNavigation from './TabNavigation'
import { useDispatch } from 'react-redux';
import { onKeepLogin } from '../actions';
import TransactionPage from '../pages/transaction';

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
            <Stack.Screen name="TabNav" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="Regis" component={RegisPage} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailPage} options={{ headerShown: false }} />
            <Stack.Screen name="Transaction" component={TransactionPage} />
        </Stack.Navigator>
    )
}

export default StackNavigation