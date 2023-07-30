import React, { useState } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppText from '../componets/Text';
import { Colors, Images } from '../style/theme';
import Spacer from '../componets/Spacer';
import Toolbar from '../componets//ToolBar';

const CAD = () => {

    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    const onLayout = () => {
        setWindowWidth(Dimensions.get('window').width);
    }


    return (
        <View style={{ flex: 1, backgroundColor: Colors.violet, width: windowWidth }} onLayout={onLayout}>
            <View style={{ position: "absolute", top: 30, left: 50 }}>
                <AppText style={{ fontSize: hp(4), color: Colors.white }}>WOCD</AppText>
            </View>

            <View style={{ position: "absolute", top: 30, right: 50 }}>
                <Image source={Images.logo} style={{ width: 200, height: 60, resizeMode: 'contain' }} />
            </View>

            <Spacer height={50} />

            <View style={{ flexDirection: "row", padding: 50, flex: 1 }}>
                <Image source={{
                    uri: 'https://www.cad-schroer.com/wp-content/uploads/2018/04/M4-DRAFTING-Parametric-CAD-06_en.jpg'
                }} style={{ width: "100%", height: "100%", resizeMode: 'contain' }} />
            </View>

            <Toolbar />
        </View>
    )
}

export default CAD;
