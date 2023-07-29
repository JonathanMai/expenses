import React from 'react';
import {StyleSheet, View} from 'react-native';

import UnderLine, {
  DateInputUnderLine,
  MoneyInputUnderLine,
} from '../../common/Input/UnderLine';

import {IExpense} from '../../../features/types';

type TExpensesKeys = keyof IExpense;

const inputs: TExpensesKeys[] = ['Title', 'Amount', 'Date'];

type TExpenseNoId = Omit<IExpense, 'id'>;

interface IProps {
  expense: Partial<TExpenseNoId> | TExpenseNoId;
  setExpense: Function;
}
/**
 * Creates the expenses fields inputs according to field type(Title, Amount, Date)
 *
 * @param {IExpense} expense - holds the expense values.
 * @param {Function} setExpense - let the fields to assign new value.
 * @returns
 */
const ExpensesInputs = ({expense, setExpense}: IProps) => {
  const renderInput = (key: string, onChangeText: Function) => {
    switch (key) {
      case 'Amount':
        return (
          <MoneyInputUnderLine
            value={expense[key]}
            placeholder={key}
            {...{onChangeText}}
          />
        );
      case 'Date':
        return (
          <DateInputUnderLine
            value={expense[key]}
            setValue={onChangeText}
            placeholder={key}
          />
        );
      default:
        return (
          <UnderLine
            value={expense[key]}
            placeholder={key}
            {...{onChangeText}}
          />
        );
    }
  };
  return inputs.map(key => {
    const onChangeText = (text: string) =>
      setExpense((prev: IExpense) => ({...prev, [key]: text}));

    return (
      <View key={key} style={styles.input}>
        {renderInput(key, onChangeText)}
      </View>
    );
  });
};

export default ExpensesInputs;

const styles = StyleSheet.create({
  input: {
    marginBottom: 40,
  },
});
