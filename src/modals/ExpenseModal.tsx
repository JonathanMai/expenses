import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {normalizeText} from '../utils/sizes';
import Modal from '../components/common/Modal';
import Text from '../components/common/text/Text';
import ExpensesInputs from '../components/features/expenses/ExpensesInputs';
import {MainStackNavigationProp} from '../navigation/MainStack';
import {
  addExpense,
  editExpense,
  removeExpense,
} from '../features/expenses/slice';
import ActionButton from '../components/common/buttons/ActionButton';
import {useColors} from '../themes/useColors';
import {IExpense} from '../features/types';
import {useAppDispatch} from '../features/hooks';
import TextButton from '../components/common/buttons/TextButton';

type TNewExpense = Omit<IExpense, 'id'>;
const initExpense: TNewExpense = {Title: '', Amount: '', Date: ''};

/**
 *
 * @param {MainStackNavigationProp} -
 *          navigation and route.
 *          route holds two params:
 *          isNew: boolean => indicates to open logic for a new expense
 *          expense: IExpense => when editable(isNew = false), needs to get expense to edit - using its id to be able to edit it in the db
 */
const ExpenseModal = ({route, navigation}: MainStackNavigationProp) => {
  const {BACKGROUND} = useColors();
  const dispatch = useAppDispatch();
  const {isNew} = route.params;

  // states
  const [expense, setExpense] = useState<TNewExpense | undefined>(
    route?.params?.isNew ? initExpense : route.params.expense, // inits expense according to modal type(new/edit expense)
  );

  // local functions
  // handles action button
  const handleActionPress = () => {
    dispatch(
      isNew
        ? addExpense(expense as IExpense)
        : editExpense(expense as IExpense),
    );
    navigation.goBack();
  };

  // removes expense
  const handleDeleteExpense = () => {
    dispatch(removeExpense(route.params.expense!.id as string));
    navigation.goBack();
  };

  // when finding one empty string returns is disabled true
  const isDisabled = () => Object.values(expense!).some(val => !val.length);

  return (
    <Modal
      paddingTop={20}
      style={[styles.container, {backgroundColor: BACKGROUND}]}>
      <View>
        <Text style={styles.title}>{isNew ? 'Create ' : 'Edit '}Expense</Text>
        <ExpensesInputs
          expense={expense as TNewExpense}
          setExpense={setExpense}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ActionButton
          label={isNew ? 'Create' : 'Save'}
          onPress={handleActionPress}
          disabled={isDisabled()}
        />
        {!isNew && (
          <TextButton style={styles.deleteButton} onPress={handleDeleteExpense}>
            Delete
          </TextButton>
        )}
      </View>
    </Modal>
  );
};

export default ExpenseModal;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'center',
    marginBottom: 50,
    fontSize: normalizeText(18),
  },
  buttonsContainer: {alignItems: 'center', paddingBottom: 20},
  deleteButton: {marginVertical: 20},
});
