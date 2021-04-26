import axios from 'axios';
import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../actions';
import CardCart from '../components/cardCart';
import { URL_API } from '../helper';

const CartPage = (props) => {
    const dispatch = useDispatch()
    const { cart, iduser, username } = useSelector(({ userReducer }) => {
        console.log("cek", userReducer.cart)
        return {
            cart: userReducer.cart,
            iduser: userReducer.id,
            username: userReducer.username
        }
    })

    const totalPayment = () => {
        let total = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
                total += item.subTotal
            })
        }
        return total
    }

    const onBtCheckout = () => {
        // userTransaction = {iduser,username,tgl_transaksi,status,total_payment,detail_pembelian}
        let date = new Date()
        axios.post(URL_API + `/userTransaction`, {
            iduser,
            username,
            tgl_transaksi: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            total_payment: totalPayment(),
            status: 'Unpaid',
            detail_pembelian: cart
        }).then(res => {
            axios.patch(URL_API + `/users/${iduser}`, { cart: [] })
                .then(resPatch => {
                    dispatch(updateCart(resPatch.data.cart))
                    props.navigation.navigate("Profile")
                }).catch(errPatch => {
                    console.log(errPatch)
                })
        }).catch(err => {
            console.log(err)
        })
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
                    onPress={onBtCheckout}
                />
            </View>
        </View>
    )
}

export default CartPage