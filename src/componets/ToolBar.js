import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import Button from './Button';
import { Colors } from '../style/theme';
import AppText from './Text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const Toolbar = () => {
    const navigation = useNavigation();
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    const onLayout = () => {
        setWindowWidth(Dimensions.get('window').width);
    }


    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", height: 100, width: windowWidth }} onLayout={onLayout}>
            <Button style={{ width: 180 }} onPress={() => { navigation.push('freeSample') }} backgroundColor={Colors.green}>
                <AppText style={{ fontSize: 16, color: Colors.white }}>REQUEST A</AppText>
                <AppText style={{ fontSize: 16, color: Colors.white }}>FREE SAMPLE</AppText>
            </Button>

            <Button style={{ width: 180 }} onPress={() => { navigation.push('digitalBroucher') }} backgroundColor={Colors.green}>
                <AppText style={{ fontSize: 16, color: Colors.white }}>REQUEST A</AppText>
                <AppText style={{ fontSize: 16, color: Colors.white }}>DIGITAL BROCHURE</AppText>
            </Button>

            <Button style={{ width: 180 }} onPress={() => { navigation.push('cad') }} backgroundColor={Colors.green}>
                <AppText style={{ fontSize: 16, color: Colors.white }}>VIEW CAD</AppText>
            </Button>

            <Button style={{ width: 180 }} onPress={() => { navigation.goBack(); }} backgroundColor={Colors.green}>
                <AppText style={{ fontSize: 16, color: Colors.white }}>BACK</AppText>
            </Button>
        </View>
    );
}

export default Toolbar;
