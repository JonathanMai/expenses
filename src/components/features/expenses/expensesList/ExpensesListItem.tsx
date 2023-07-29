import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Row from '../../../common/Row';
import ExpenseAmount from '../../../common/ExpenseAmount';
import {currencyFormat} from '../../../../utils/numbers';
import Text from '../../../common/text/Text';

import {normalizeText} from '../../../../utils/sizes';

import listStyles from './styles';

import {IExpense} from '../../../../features/types';
import {MainStackNavigationProp} from '../../../../navigation/MainStack';

/**
 * creates expense line to show
 *
 * @param {IExpense} props - holds the expense data to show
 * @returns
 */
const ExpensesListItem = (props: IExpense) => {
  const navigation = useNavigation<MainStackNavigationProp['navigation']>();
  const onPress = () => {
    navigation.navigate('ExpenseModal', {
      expense: props,
    });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={[styles.container, listStyles.listPadding]}>
        <Text style={styles.title}>{props.Title}</Text>
        <ExpenseAmount
          value={currencyFormat(parseFloat(props.Amount))}
          size={18}
        />
      </Row>
    </TouchableOpacity>
  );
};

export default ExpensesListItem;

const styles = StyleSheet.create({
  container: {justifyContent: 'space-between', paddingVertical: 20},
  title: {fontSize: normalizeText(16)},
});
