import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import { FontFamily } from '../style/theme';

interface AppTextProps extends TextProps {
  children: ReactNode;
}

const AppText: React.FC<AppTextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps} fontFamily={FontFamily.Regular}>{children}</Text>;
};

export default AppText;
