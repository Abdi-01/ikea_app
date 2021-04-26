import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import CardCart from '../components/cardCart';

const CartPage = (props) => {
    const { cart } = useSelector(({ userReducer }) => {
        console.log("cek", userReducer.cart)
        return {
            cart: userReducer.cart
        }
    })

    const totalPayment = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.subTotal
        })
        return total
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: hp(3.5) }}>
            <FlatList
                data={cart}
                renderItem={({ item, index }) => (
                    <CardCart idx={index} data={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: wp(2) }}
            />
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', padding: wp(2) }}>
                <View>
                    <Text>Total Payment</Text>
                    <Text h4>IDR. {totalPayment()}</Text>
                </View>
                <Button
                    title="Checkout"
                    containerStyle={{ width: wp('40%') }}
                    buttonStyle={{ backgroundColor: '#FBD914' }}
                    titleStyle={{ color: '#0058AB' }}
                />
            </View>
        </View>
    )
}

export default CartPage