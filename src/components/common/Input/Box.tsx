import React from 'react';
import {StyleSheet, View} from 'react-native';

import {TTextInputProps} from '../text/TextInput';
import Floating from './Floating';

import {useColors} from '../../../themes/useColors';
import {COLORS} from '../../../themes/colors';

/**
 * Creates a box input using Floating input animation
 * @param {TTextInputProps} props
 * @returns
 */
const Box = (props: TTextInputProps) => {
  const {BOX_INPUT_BACKGROUND, SHADOW} = useColors();
  const background = {backgroundColor: BOX_INPUT_BACKGROUND};

  return (
    <View style={[styles.box, {shadowColor: SHADOW}]}>
      <View style={[styles.content, background]}>
        <Floating {...props} style={background} />
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 0,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderColor: COLORS.PURPLE,
  },
  content: {padding: 5},
});
