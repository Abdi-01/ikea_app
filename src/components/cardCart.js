import React from 'react';
import { Body, Card, CardItem, Left, Right, Thumbnail } from 'native-base';
import { Text, Button, Icon } from 'react-native-elements';

const CardCart = ({ data }) => {
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
                    } />
                    <Text h4 style={{marginHorizontal:10}}>{data.qty}</Text>
                    <Button type="outline" icon={
                        <Icon type="feather" name="plus" size={15} />
                    } />
                </Right>
            </CardItem>
        </Card>
    )
}

export default CardCart