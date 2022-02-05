import React, { useState } from 'react';
import ExpenseForm from '../../UI/Form';

import './styles.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showAddForm = () => {
    setIsEditing(true);
  };

  const hideAddForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={showAddForm}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideAddForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
