import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './styles.css';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = data => {
        setFilteredYear(data);
    }
    return(
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                props.data.map((data) => (
                    <ExpenseItem 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        date={data.date}
                    />
                ))
            }
        </Card>
    );
}

export default Expense;