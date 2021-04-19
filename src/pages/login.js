import React, { useEffect } from 'react';
import { Button, Icon, Input } from 'react-native-elements'
import { View, Text, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux'
import { getUsers } from '../actions'

const LoginPage = (props) => {
    // digunakan untuk menjalankan fungsi dari actions
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: "https://ezc.partners/wp-content/uploads/2020/04/ikea-logo.jpg" }} style={{ width: wp('60%'), height: hp('10%') }} />
            <View style={{ width: wp(70), alignItems: 'center', margin: hp(5) }}>
                <Input placeholder="username"
                    leftIcon={
                        <Icon name="user" type="feather" size={22} />
                    } />
                <Input placeholder="Password"
                    leftIcon={
                        <Icon name="lock" type="feather" size={22} />
                    } secureTextEntry />
                <Button title="Sign In"
                    onPress={() => props.navigation.navigate('Home')} containerStyle={{ width: wp(30) }} />
            </View>
        </View>
    )
}

export default LoginPage