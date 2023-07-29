import {SectionList} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useAppSelector} from '../../../../features/hooks';
import {getExpenses} from '../../../../features/expenses/slice';
import ExpensesListItem from './ExpensesListItem';
import ExpensesListHeader from './ExpensesListHeader';
import {isDateBiggerOrEqual} from '../../../../utils/dates';
import {IExpense, TFilter} from '../../../../features/types';
import LineSeparator from '../../../common/separators/LineSeparator';
import {getFilters} from '../../../../features/filters/slice';

interface Section {
  title: string;
  data: Required<IExpense>[];
}

type TFilterKeys = keyof TFilter;

/**
 * Creates expenses list using expenses reducer (expensesList).
 */
const ExpensesList = () => {
  const data = useAppSelector(getExpenses);
  const filters = useAppSelector(getFilters);
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    parseData(data, filters);
  }, [data, filters]);

  // parses data into section data
  const parseData = (expenses: IExpense[], expensesFilters: TFilter) => {
    let filteredExpenses = expenses;

    // first - we need to filter the data before putting in sections
    if (Object.keys(expensesFilters).length > 0) {
      filteredExpenses = expenses.filter((val: IExpense) => {
        const keys = Object.keys(expensesFilters) as TFilterKeys[];
        return keys.every((filterKey: TFilterKeys) => {
          // when filter is empty
          if (!expensesFilters[filterKey]?.length) {
            return true;
          }
          // checks if string is inside the given string
          return val[filterKey]
            .toString()
            .toLowerCase()
            .includes(expensesFilters[filterKey]!.toString().toLowerCase());
        });
      });
    }

    // puts data into sections
    const expensesSectionList = filteredExpenses.reduce(
      (prev: {[key: string]: Section}, val: IExpense) => {
        const temp: {[key: string]: Section} = {...prev};
        if (!temp[val.Date]) {
          temp[val.Date] = {title: val.Date, data: []};
        }
        temp[val.Date].data.push(val as Required<IExpense>);
        return temp;
      },
      {},
    );

    const temp = Object.values(expensesSectionList).sort((a, b) =>
      isDateBiggerOrEqual(a.title, b.title) ? -1 : +1,
    );

    setSections(temp);
  };

  return (
    sections && (
      <SectionList
        {...{
          renderItem,
          ItemSeparatorComponent,
          renderSectionHeader,
          keyExtractor,
          sections,
        }}
      />
    )
  );
};

// Local Functions
// Give key to items
const keyExtractor = (item: IExpense) => item.id!;
// Renders header
const renderSectionHeader = ({section: {title}}: {section: Section}) => (
  <ExpensesListHeader {...{title}} />
);
// Renders item
const renderItem = ({item}: {item: IExpense}) => <ExpensesListItem {...item} />;

// Renders line separator
const ItemSeparatorComponent = () => <LineSeparator />;

export default ExpensesList;
