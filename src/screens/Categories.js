import React, { useState } from 'react';
import { View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppText from '../componets/Text';
import { Colors, Images } from '../style/theme';
import Spacer from '../componets/Spacer';
import { HLine } from '../componets/Line';
import CategoryBox from '../componets/CategoryBox';
import useDeviceOrientation from '../hooks/useDeviceOrientation';
import { useNavigation } from '@react-navigation/native';



const Categories = () => {

  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [gridSize, setGridSize] = useState(4);
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  const deviceOrientation = useDeviceOrientation();

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

      <View style={{
        position: "absolute",
        bottom: 30,
        left: 50,
        zIndex: 999999
      }}>
        <TouchableOpacity style={{
          borderColor: Colors.white,
          borderRadius: 5,
          borderWidth: 1,
          padding: 10
        }}
          onPress={() => {
            navigation.push('adminLogin');
          }}
        >
          <AppText style={{ fontSize: hp(2), color: Colors.white }}>ADMIN</AppText>
        </TouchableOpacity>
      </View>


      <Spacer height={deviceOrientation == 'landscape' ? 80 : 130} />

      <TextInput
        style={{
          backgroundColor: Colors.white,
          height: 44,
          width: wp(40),
          alignSelf: 'center',
          paddingLeft: 15
        }}
        value={searchText}
        placeholder="ENTER A NUMBER FROM THE BOARD"
        placeholderTextColor={Colors.black}
        onChangeText={(text) => {
          setSearchText(text);
        }}
        onSubmitEditing={async (event) => {
        }}
      ></TextInput>
      <Spacer height={30} />

      <View style={{
        flexDirection: 'row',
        flex: 1
      }}>

        <View style={{ flex: deviceOrientation == 'landscape' ? 2 : 1 }}></View>

        <View style={{ flex: deviceOrientation == 'landscape' ? 6 : 8 }}>
          <View>
            <AppText style={{ fontSize: hp(1.8), color: Colors.white }}>MOST POPULAR PARTS FROM THIS CATEGORY</AppText>
            <Spacer height={10} />
            <HLine backgroundColor={Colors.green} height={3} />
          </View>
          <Spacer height={15} />
          <View style={{ flex: 1 }}>
            {Array(gridSize - 1).fill().map((val, columnIndex) => (
              <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 40 }} key={columnIndex}>
                {Array(gridSize).fill().map((val, rowIndex) => (
                  <CategoryBox key={`${rowIndex}.${columnIndex}`} />
                ))}
              </View>
            ))}
          </View>
        </View>


        <View style={{ flex: deviceOrientation == 'landscape' ? 2 : 1 }}></View>
      </View>
    </View>
  )
}

export default Categories;

