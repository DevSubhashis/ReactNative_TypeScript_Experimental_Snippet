import React from 'react';
import { Pressable } from 'react-native';
import { Colors } from '../style/theme';

const Button = ({ onPress, children, style, backgroundColor, ...restProps }) => {
    const button = {
        borderRadius: 8,
        padding: 6,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        ...style
    };
    return (
        <Pressable
            {...restProps}
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#228B22' : backgroundColor,
                },
                button
            ]}
        >
            {children}
        </Pressable>
    )
}

export default Button;