import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';

import Landing from '../screens/Landing';
import Categories from '../screens/Categories'
import PartsDetails from '../screens/PartsDetails'
import AdminLogin from '../screens/AdminLogin'
import DigitalBroucher from '../screens/DigitalBroucher'
import FreeSample from '../screens/FreeSample'
import CAD from '../screens/CAD'
import SetCategory from '../screens/SetCategory'

enableScreens(true);
const appStack = createNativeStackNavigator();
const mainStack = createNativeStackNavigator();



const AppStack = () => {
    return (
      <appStack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="landing" >
        <appStack.Screen name="landing" component={Landing} />
        <appStack.Screen name="categories" component={Categories} />
        <appStack.Screen name="partsDetails" component={PartsDetails} />
        <appStack.Screen name="adminLogin" component={AdminLogin} />
        <appStack.Screen name="digitalBroucher" component={DigitalBroucher} />
        <appStack.Screen name="freeSample" component={FreeSample} />
        <appStack.Screen name="cad" component={CAD} />
        <appStack.Screen name="setCategory" component={SetCategory} />
      </appStack.Navigator>
    )
  };
  

const Main = () => {
    return (
        <mainStack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="appStack" >
            <mainStack.Screen name="appStack" component={AppStack} />
        </mainStack.Navigator>
    )
};




const AppNavigator = () => {
    return <Main />;
};



export default AppNavigator;