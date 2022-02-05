import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './styles.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredData = props.data.filter(
    (expense) =>
      expense.date.getFullYear().toString() === filteredYear,
  );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredData} />
      </Card>
    </li>
  );
};

export default Expense;
