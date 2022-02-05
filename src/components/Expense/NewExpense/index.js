import React from "react";
import ExpenseForm from "../../UI/Form";

import './styles.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;