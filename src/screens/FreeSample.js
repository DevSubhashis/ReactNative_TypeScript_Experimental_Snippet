import React, { useState } from 'react';
import { View, Dimensions, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppText from '../componets/Text';
import { Colors, Images } from '../style/theme';
import Spacer from '../componets/Spacer';
import { HLine } from '../componets/Line';
import Button from '../componets/Button';
import Toolbar from '../componets//ToolBar';

const FreeSample = () => {

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

                <View style={{ flex: .2 }}></View>

                <View style={{ flex: .5 }}>
                    <AppText style={{ fontSize: hp(3), color: Colors.white }}>
                        FREE SAMPLE REQUEST
                    </AppText>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"Your Name"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"Company"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"Phone Number"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"Title"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"Your Email"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"Address"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"City"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"State"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <TextInput
                        style={{
                            backgroundColor: Colors.white,
                            height: 36,
                            width: "100%",
                            //alignSelf: 'center',
                            paddingLeft: 15
                        }}
                        //value={searchText}
                        placeholderTextColor={Colors.black}
                        placeholder={"Zip Code"}
                        onChangeText={(text) => {
                            // setSearchText(text);
                        }}
                        onSubmitEditing={async (event) => {
                        }}
                    ></TextInput>
                    <Spacer height={20} />
                    <Button style={{ width: wp(15) }} onPress={() => { alert("123"); }} backgroundColor={Colors.green}>
                        <AppText style={{ fontSize: hp(2.5), color: Colors.white, fontWeight: "bold" }}>Request Sample</AppText>
                    </Button>


                </View>

            </View>

            <Toolbar />
        </View>
    )
}

export default FreeSample;
