import {StyleSheet, View} from 'react-native';
import React from 'react';

/**
 *
 * @param {View['props']['style']} style - styles the row wrapper
 * @returns
 */
const Row = ({style, ...rest}: View['props']) => {
  return <View {...rest} style={[styles.row, style]} />;
};

export default Row;

const styles = StyleSheet.create({row: {flexDirection: 'row'}});
