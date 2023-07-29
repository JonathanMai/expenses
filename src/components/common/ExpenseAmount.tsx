import {StyleSheet} from 'react-native';
import React from 'react';
import {normalizeText} from '../../utils/sizes';
import Row from './Row';
import Text from './text/Text';

interface IProps {
  value: string;
  size: number;
}

/**
 * Creates the dollars amount style which is used all over the app.
 *
 * @param {string} value - holds the amount of dollars
 * @param {number} size - fontSize, default is 16
 * @returns
 */
const ExpenseAmount = ({value, size = 16}: IProps) => {
  const labels = value.split('.');
  return (
    <Row style={styles.container}>
      <Text style={{fontSize: normalizeText(size - 4)}}>$</Text>
      <Text style={{fontSize: normalizeText(size)}}>{labels[0]}</Text>
      <Text style={{fontSize: normalizeText(size - 4)}}>{`.${labels[1]}`}</Text>
    </Row>
  );
};

export default ExpenseAmount;

const styles = StyleSheet.create({
  container: {alignItems: 'baseline'},
});
