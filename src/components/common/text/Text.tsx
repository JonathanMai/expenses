import React from 'react';
import {Text as RNText} from 'react-native';

import useDefaultTextStyle from './useDefaultTextStyle';

import {ITextProps, textType} from './types';

export type TTextProps = ITextProps & RNText['props'];

/**
 * Holds the text which is used all over the application, handles default styles and colors.
 *
 * @param {textType} type - holds the fontFamily type.
 */
const Text = ({type = textType.normal, style, ...rest}: TTextProps) => {
  const defaultStyle = useDefaultTextStyle(type);

  return <RNText {...rest} style={[defaultStyle, style]} />;
};

export default Text;
