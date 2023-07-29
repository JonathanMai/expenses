import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

import useDefaultTextStyle from './useDefaultTextStyle';

import {ITextProps, textType} from './types';

export type TTextInputProps = ITextProps &
  RNTextInput['props'] & {value: string; paddingLeft?: number};

/**
 * Apps text input, handles some default states and styles.
 *
 * @param {textType} type - holds the fontFamily type.
 */
const TextInput = ({
  type = textType.normal,
  style,
  ...rest
}: TTextInputProps) => {
  const defaultStyle = useDefaultTextStyle(type);

  return (
    <RNTextInput
      {...rest}
      style={[defaultStyle, styles.container, style]}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({container: {padding: 0}});
