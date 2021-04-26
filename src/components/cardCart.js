import React from 'react';
import { Body, Card, CardItem, Left, Right, Thumbnail } from 'native-base';
import { Text, Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { URL_API } from '../helper'
import { updateCart } from '../actions'

const CardCart = ({ data, idx }) => {

    const dispatch = useDispatch()

    const { cart, iduser } = useSelector(({ userReducer }) => {
        return {
            cart: userReducer.cart,
            iduser: userReducer.id
        }
    })

    const onBtQty = (type) => {
        if (type == "inc") {
            cart[idx].qty += 1
        } else if (type == "dec") {
            cart[idx].qty -= 1
        }
        cart[idx].subTotal = cart[idx].qty * cart[idx].harga

        axios.patch(URL_API + `/users/${iduser}`, { cart })
            .then(res => {
                dispatch(updateCart(res.data.cart))
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: data.image }} />
                    <Body>
                        <Text>{data.nama}</Text>
                        <Text>IDR. {data.subTotal}</Text>
                    </Body>
                </Left>
                <Right style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Button type="outline" icon={
                        <Icon type="feather" name="minus" size={15} />
                    } onPress={() => onBtQty("dec")} />
                    <Text h4 style={{ marginHorizontal: 10 }}>{data.qty}</Text>
                    <Button type="outline" icon={
                        <Icon type="feather" name="plus" size={15} />
                    } onPress={() => onBtQty("inc")} />
                </Right>
            </CardItem>
        </Card>
    )
}

export default CardCart