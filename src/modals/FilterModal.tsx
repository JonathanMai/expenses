import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Modal from '../components/common/Modal';
import Text from '../components/common/text/Text';
import ExpensesInputs from '../components/features/expenses/ExpensesInputs';
import ActionButton from '../components/common/buttons/ActionButton';
import TextButton from '../components/common/buttons/TextButton';

import {useAppDispatch, useAppSelector} from '../features/hooks';
import {getFilters, setFilterBy} from '../features/filters/slice';
import {normalizeText} from '../utils/sizes';

import {useColors} from '../themes/useColors';

import {TFilter} from '../features/types';

//constant
const MODAL_TOP_PADDING: number = 30; // used to move the X and title from top
const initExpense: TFilter = {Title: '', Amount: '', Date: ''}; // used to init the filters

/**
 * Filter modal - holds all filter configurations of the expenses list, using filters reducer to set filters.
 */
const FilterModal = () => {
  // hooks/states
  const navigation = useNavigation();
  const {BACKGROUND} = useColors();
  const dispatch = useAppDispatch();
  const filterBy = useAppSelector(getFilters);
  const [filter, setFilter] = useState<TFilter>(initExpense);

  // effects
  useEffect(() => {
    setFilter(filterBy ?? initExpense);
  }, [filterBy]);

  // local functions
  const handlePress = () => handleFilterPick(filter);
  const handleClean = () => handleFilterPick(initExpense);

  // handles filter pick type and closes modal
  const handleFilterPick = (filterPicked: TFilter) => {
    dispatch(setFilterBy(filterPicked));
    navigation.goBack();
  };

  return (
    <Modal
      style={[styles.container, {backgroundColor: BACKGROUND}]}
      paddingTop={MODAL_TOP_PADDING}>
      <View style={styles.content}>
        <TextButton onPress={handleClean} style={styles.clear}>
          clean
        </TextButton>
        <Text style={styles.title}>Filters</Text>
      </View>
      <ExpensesInputs expense={filter} setExpense={setFilter} />
      <ActionButton label={'Save'} onPress={handlePress} />
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    marginBottom: 30,
  },
  title: {
    alignSelf: 'center',
    fontSize: normalizeText(18),
  },
  clear: {
    position: 'absolute',
    left: 15,
    top: 0,
  },
});
