import React from 'react';
import {StyleSheet} from 'react-native';

import Text from './Text';
import Row from '../Row';

import {normalizeText} from '../../../utils/sizes';

import {COLORS} from '../../../themes/colors';
import {textType} from './types';

export interface ITextLabelProps {
  label: string | number;
  value: string | number;
}

/**
 * Creates a button that looks like underline input.
 *
 * @param {string} label - holds the left side string
 * @param {string} value - holds the right side string
 * @returns
 */
const TextLabel = ({label, value}: ITextLabelProps) => {
  return (
    <Row style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Text type={textType.bold} style={styles.text}>
        {value}
      </Text>
    </Row>
  );
};

export default TextLabel;

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.GREY_2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 30,
  },
  text: {
    fontSize: normalizeText(17),
  },
});
