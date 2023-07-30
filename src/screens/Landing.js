import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppText from '../componets/Text';
import Button from '../componets/Button';
import { Colors } from '../style/theme';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';


const Landing = () => {

  const navigation = useNavigation();
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const onLayout = () => {
    setWindowWidth(Dimensions.get('window').width);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.green, width: windowWidth }} onLayout={onLayout}>
      <View style={{ position: "absolute", top: 50, left: 50 }}>
        <AppText style={{ fontSize: hp(3), color: Colors.white }}>WOCD</AppText>
      </View>

      <View style={{ flex: 8, justifyContent: "center", alignItems: "center" }}>

        <Video source={require("../assets/broadchurch.mp4")}   // Can be a URL or a local file.                                   // Store reference
          style={{
            width: '75%',
            height: '75%'
          }} />

      </View>

      <View style={{ alignSelf: 'center', flex: 2 }}>
        <Button style={{ width: wp(25) }} onPress={() => {
          navigation.push('categories');
        }} backgroundColor={Colors.violet}>
          <AppText style={{ fontSize: hp(2.2), color: Colors.white }}>TAP TO BEGIN</AppText>
        </Button>
      </View>
    </View>
  );

}

export default Landing;