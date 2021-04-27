import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import { Avatar, Header, ListItem, Card, Button, Icon } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { onLogout } from '../actions/userAction';
const ProfilePage = (props) => {

    const [state, setState] = useState({
        account: [
            {
                title: 'Transactions',
                icon: 'cart',
                press: () => props.navigation.navigate("Transaction")
            }
            , {
                title: 'Change Profile',
                icon: 'account-edit',
                press: () => { }
            }
            , {
                title: 'My Promo',
                icon: 'card-bulleted-outline',
                press: () => { }
            }
        ],
        about: [
            {
                title: 'Settings',
                icon: 'cog-outline',
                press: () => { }
            }
            , {
                title: 'Privacy and Police',
                icon: 'shield-account',
                press: () => { }
            }
            , {
                title: 'Logout',
                icon: 'logout',
                press: () => dispatch(onLogout())
            }
        ]
    })

    const dispatch = useDispatch()
    const { iduser, username } = useSelector(({ userReducer }) => {
        return {
            iduser: userReducer.id,
            username: userReducer.username
        }
    })

    useEffect(() => {
        console.log("data dari reducer :", iduser)
        if (!iduser) {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        }
    })

    return (
        <View style={{ flex: 1, paddingTop: hp(2) }}>
            <ImageBackground source={{ uri: 'https://img4.goodfon.com/wallpaper/nbig/a/45/ralli-moto-dakar-dakar-sport-rally-skorost-pesok-gonshchik-m.jpg' }}
                style={{ width: wp('100%'), height: hp(42), justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%' }}>
                    <Avatar
                        containerStyle={{ alignSelf: 'center', marginTop: "5%" }}
                        rounded
                        size={120}
                        source={{
                            uri:
                                'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg',
                        }}
                        showEditButton
                    />
                    <Text style={{ fontSize: 35, marginTop: 10, alignSelf: 'center', color: 'white' }}>{username}</Text>
                    <Text style={{ fontSize: 20, marginTop: 10, alignSelf: 'center', color: 'white' }}>Kalibata City  - Jakarta Selatan</Text>
                </View>
            </ImageBackground>
            <Card containerStyle={{ flex: 1, borderTopRightRadius: 50, borderTopLeftRadius: 50, width: wp(100), margin: 0, marginTop: hp("-6.5%") }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Card containerStyle={{ padding: 0, marginHorizontal: 0, borderWidth: 0 }}>
                        <Text style={{ fontSize: 20, paddingStart: 22, fontWeight: 'bold', color: "#0058AB" }}>Account</Text>
                        {
                            state.account.map((item, i) => (
                                <ListItem
                                    key={i}
                                    bottomDivider
                                    onPress={item.press}
                                >
                                    <Icon name={item.icon} size={25} type='material-community' color="#FBD914" />
                                    <ListItem.Content>
                                        <ListItem.Title>{item.title}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            ))
                        }
                    </Card>
                    <Card containerStyle={{ padding: 0, marginHorizontal: 0, borderWidth: 0 }}>
                        <Text style={{ fontSize: 20, paddingStart: 22, paddingTop: 10, fontWeight: 'bold', color: "#0058AB" }}>About</Text>
                        {
                            state.about.map((item, i) => (
                                <ListItem
                                    key={i}
                                    bottomDivider
                                    onPress={item.press}
                                >
                                    <Icon name={item.icon} size={25} type='material-community' color="#FBD914" />
                                    <ListItem.Content>
                                        <ListItem.Title>{item.title}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            ))
                        }
                    </Card>
                </ScrollView>
            </Card>
        </View>
    )
}

export default ProfilePage