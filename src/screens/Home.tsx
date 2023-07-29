import React from 'react';
import ExpensesSum from '../components/features/expenses/ExpensesSum';
import Filter from '../components/features/expenses/Filter';
import ExpensesList from '../components/features/expenses/expensesList/ExpensesList';

/**
 * Home screen - shows expenses sum and expenses list.
 */
const Home = () => {
  return (
    <>
      <ExpensesSum />
      <Filter />
      <ExpensesList />
    </>
  );
};

export default Home;
