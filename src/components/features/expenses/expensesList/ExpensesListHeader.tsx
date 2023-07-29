import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../../../common/text/Text';

import {normalizeText} from '../../../../utils/sizes';

import {useColors} from '../../../../themes/useColors';
import listStyles from './styles';

interface IProps {
  title: string;
}

/**
 * Builds the section header which holds the date.
 * @param {string} title - title string to place in header
 * @returns
 */
const ExpensesListHeader = ({title}: IProps) => {
  const {SPACE} = useColors();
  const background = {backgroundColor: SPACE};

  return (
    <View style={[styles.container, listStyles.listPadding, background]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default ExpensesListHeader;

const styles = StyleSheet.create({
  container: {paddingVertical: 3},
  text: {fontSize: normalizeText(14)},
});
