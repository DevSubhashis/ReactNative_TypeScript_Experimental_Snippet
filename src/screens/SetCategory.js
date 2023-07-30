import React, { useState } from 'react';
import { View, Dimensions, Image } from 'react-native';
import AppText from '../componets/Text';
import { Colors, Images } from '../style/theme';
import Spacer from '../componets/Spacer';
import useDeviceOrientation from '../hooks/useDeviceOrientation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../componets/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const SetCategory = () => {

    const navigation = useNavigation();
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const deviceOrientation = useDeviceOrientation();
    const onLayout = () => {
        setWindowWidth(Dimensions.get('window').width);
    }


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);


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


            <View style={{ width: wp(55), height: hp(60), justifyContent: "center", alignItems: 'center' }}>
                <AppText style={{ fontSize: hp(3), color: Colors.white }}>Set Category for this Kiosk</AppText>
                <Spacer height={20} />
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>

        </View>
    )
};

export default SetCategory;



