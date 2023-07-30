import React from "react";
import { View ,  StyleSheet} from "react-native";

export const HLine = ({ style, height = StyleSheet.hairlineWidth , width = '100%', backgroundColor = "#ebedef", ...props }) => {
    return (
        <View style={[{ height, width, backgroundColor }, style]} {...props} />
    );
}

export const VLine = ({ style, width = StyleSheet.hairlineWidth , height , backgroundColor = "#ebedef", ...props }) => {
    return (
        <View style={[{ height, width, backgroundColor }, style]} {...props} />
    );
}
