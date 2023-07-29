import React from 'react';
import {StyleSheet} from 'react-native';
import {useAppSelector} from '../../../features/hooks';

import Text from '../../common/text/Text';
import Row from '../../common/Row';
import ExpenseAmount from '../../common/ExpenseAmount';

import {getExpensesTotal} from '../../../features/expenses/slice';

import {normalizeText} from '../../../utils/sizes';

import {textType} from '../../common/text/types';

/**
 * Shows the total sum of all expenses
 */
const ExpensesSum = () => {
  const sum = useAppSelector(getExpensesTotal);
  return (
    <Row style={styles.container}>
      <Text type={textType.bold} style={styles.total}>
        Total Expenses
      </Text>
      <ExpenseAmount value={sum} size={22} />
    </Row>
  );
};

export default ExpensesSum;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10, paddingVertical: 20, alignItems: 'center'},
  total: {marginRight: 10, fontSize: normalizeText(16)},
  sum: {fontSize: normalizeText(22)},
});
