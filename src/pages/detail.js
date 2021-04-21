import React from 'react';
import { CardItem, Left, Right } from 'native-base';
import { Image, View, FlatList } from 'react-native';
import { Button, Card, Text, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (props) => {
    const { detail } = props.route.params

    const dispatch = useDispatch()
    const { iduser } = useSelector(({ userReducer }) => {
        return {
            iduser: userReducer.id
        }
    })
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ height: hp("50%"), width: wp("100%") }}>
                <FlatList
                    data={detail.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ height: hp(50), width: wp(100) }} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center', marginTop: hp("-8%") }}>
                <Card containerStyle={{ flex: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30, width: wp(100) }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'gray', textAlign: 'right' }}>{detail.kategori}</Text>
                    <Text h3>{detail.nama}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* <Text h4>Stock : {detail.stok}</Text> */}
                        <Text style={{ fontWeight: "bold", color: '#0058AB', fontSize: 25 }}>IDR. {detail.harga}</Text>
                    </View>
                    <Text style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray', color: 'gray', marginTop: hp(2) }}>Deskripsi</Text>
                    <Text style={{ textAlign: 'justify', marginVertical: 10 }}>{detail.deskripsi}</Text>
                </Card>
            </View>
            <Button icon={
                <Icon
                    name="shopping-cart"
                    type="feather"
                    size={15}
                    color="#FBD914"
                    containerStyle={{ marginHorizontal: wp(4) }}
                />
            }
                containerStyle={{ width: wp(100), alignSelf: 'center', backgroundColor: '#0058AB' }} titleStyle={{ color: '#FBD914' }}
                title="Add to cart" />
        </View>
    );
}
