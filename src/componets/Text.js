import React from 'react';
import { Text } from 'react-native';
import { FontFamily } from '../style/theme';

const AppText = (props) => {
    return <Text {...props} fontFamily={FontFamily.Regular}  />
}

export default AppText;