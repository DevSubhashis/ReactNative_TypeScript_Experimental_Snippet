import React, { useState } from 'react';
import { View, Dimensions, Image, TextInput } from 'react-native';
import AppText from '../componets/Text';
import { Colors, Images } from '../style/theme';
import Spacer from '../componets/Spacer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../componets/Button';
import { useNavigation } from '@react-navigation/native';

const AdminLogin = () => {

    const navigation = useNavigation();
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const onLayout = () => {
        setWindowWidth(Dimensions.get('window').width);
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.violet, width: windowWidth, justifyContent: "center", alignItems: 'center' }} onLayout={onLayout}>
            <View style={{ position: "absolute", top: 30, left: 50 }}>
                <AppText style={{ fontSize: hp(4), color: Colors.white }}>WOCD</AppText>
            </View>

            <View style={{ position: "absolute", top: 30, right: 50 }}>
                <Image source={Images.logo} style={{ width: 200, height: 60, resizeMode: 'contain' }} />
            </View>

            <Button style={{ width: wp(15), position: "absolute", right: 150, bottom: 100 }} onPress={() => { navigation.goBack(); }} backgroundColor={Colors.green}>
                <AppText style={{ fontSize: hp(1.8), color: Colors.white }}>BACK</AppText>
            </Button>


            <View style={{  width: wp(55), height: hp(60), justifyContent: "center", alignItems: 'center' }}>
                <AppText style={{ fontSize: hp(5), color: Colors.white }}>Admin Password</AppText>
                <Spacer height={20} />
                <TextInput
                    style={{
                        backgroundColor: Colors.white,
                        height: 44,
                        width: wp(40),
                        alignSelf: 'center',
                        paddingLeft: 15
                    }}
                    //value={searchText}
                    placeholderTextColor={Colors.black}
                    onChangeText={(text) => {
                        // setSearchText(text);
                    }}
                    onSubmitEditing={async (event) => {
                    }}
                ></TextInput>
                <Spacer height={35} />
                <Button style={{ width: wp(15) }} onPress={() => { navigation.push('setCategory'); }} backgroundColor={Colors.green}>
                    <AppText style={{ fontSize: hp(3), color: Colors.white, fontWeight: 'bold' }}>GO</AppText>
                </Button>
            </View>

        </View>
    )
};

export default AdminLogin;



