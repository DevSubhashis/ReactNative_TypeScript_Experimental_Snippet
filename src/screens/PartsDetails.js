import React, { useState } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppText from '../componets/Text';
import { Colors, Images } from '../style/theme';
import Spacer from '../componets/Spacer';
import { HLine } from '../componets/Line';
import Toolbar from '../componets//ToolBar';
import Video from 'react-native-video';

const PartsDetails = () => {

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

            <Spacer height={100} />

            <View style={{ flexDirection: "row", padding: 50, flex: 1 }}>

                <View style={{ flex: .3 }}>
                    <Spacer height={100} />
                    <AppText style={{ fontSize: hp(5), color: Colors.white }}>1779FM</AppText>
                    <Spacer height={10} />
                    <HLine backgroundColor={Colors.green} height={3} />
                    <Spacer height={30} />
                    <AppText style={{ fontSize: hp(2.3), color: Colors.white }}>DESCRIPTION: </AppText>
                    <Spacer height={5} />
                    <AppText style={{ fontSize: hp(2.3), color: Colors.white, lineHeight: 40 }}>
                        Window opening control device for after-market usage, face mount, handed, dual action, only one needed per window * PATENTED
                    </AppText>
                </View>


                <View style={{ flex: .7, alignItems: 'center' }}>
                    {/* <Spacer height={50} /> */}
                    <Video source={require("../assets/broadchurch.mp4")}   // Can be a URL or a local file.                                  // Store reference
                        style={{
                            width: '75%',
                            height: '75%'
                        }} />

                </View>

            </View>

            <Toolbar />


        </View>
    )
}

export default PartsDetails;
