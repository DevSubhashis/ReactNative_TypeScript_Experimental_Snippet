import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { Colors } from '../style/theme';

interface ButtonProps extends PressableProps {
  onPress: () => void;
  children: ReactNode;
  style?: Record<string, any>;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  style,
  backgroundColor,
  ...restProps
}) => {
  const buttonStyle = {
    borderRadius: 8,
    padding: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    ...style,
  };

  return (
    <Pressable
      {...restProps}
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#228B22' : backgroundColor,
        },
        buttonStyle,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default Button;
