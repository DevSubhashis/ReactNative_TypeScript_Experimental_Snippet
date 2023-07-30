import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useDeviceOrientation from '../hooks/useDeviceOrientation';
import AppText from './Text';
import { Images, Colors } from '../style/theme';
import { useNavigation } from '@react-navigation/native';

export default CategoryBox = ({ style, ...props }) => {
    const deviceOrientation = useDeviceOrientation();
    const navigation = useNavigation();
    const layoutStyle = {
        height: deviceOrientation == 'landscape' ? 165 : 150,
        width: deviceOrientation == 'landscape' ? 165 : 150
    }
    return (
        <TouchableOpacity onPress={()=>{
            navigation.push('partsDetails');
        }}>
            <View style={[{ ...layoutStyle, borderColor: "#fff", borderWidth: 3, borderRadius: 15, justifyContent: "center", alignItems: "center" }, style]} {...props}>
                <Image source={Images.W1} style={{ height: layoutStyle.height - 10, width: layoutStyle.width - 10, borderRadius: 15 }} />
            </View>
            <View style={{
                width: 80,
                height: 30,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.green,
                position: 'absolute',
                left: 40,
                bottom: -15
            }}>
                <AppText style={{ fontSize: 16, color: Colors.white, fontWeight: 'bold' }}>W-1</AppText>
            </View>
        </TouchableOpacity>
    );
}
