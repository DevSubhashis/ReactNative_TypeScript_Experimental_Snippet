import React from "react";
import { View } from "react-native";

export default Spacer = ({ style, height, width, color: backgroundColor, ...props }) => {
    return (
        <View style={[{ height, width, backgroundColor }, style]} {...props} />
    );
}
