import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useColors} from '../../../themes/useColors';

/**
 * Line that fit the parent horizontally
 */
const LineSeparator = () => {
  const {FONT_COLOR} = useColors();
  const background = {backgroundColor: FONT_COLOR};
  return <View style={[styles.line, background]} />;
};

export default LineSeparator;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
  },
});
