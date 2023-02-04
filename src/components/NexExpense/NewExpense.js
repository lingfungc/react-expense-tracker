// * This import React from "react" is not a must in this case
import React from "react";

// * Importing CSS and child component
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

// * Define 'NewExpense' component, which gets data from parent 'App' component via (props)
const NewExpense = (props) => {
  // * This handler function is passed to 'ExpenseForm' component, and take data from 'ExpenseForm' as argument
  // * We can get this argument via 'props.onSaveExpenseData(enteredExpenseData)' in 'ExpenseForm' component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // * This 'expenseData' object inherits all data from 'enteredExpenseData' and adds an 'id' as well
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };

    // * We call 'props.onAddExpense(expenseData)' to pass the data from 'NewExpense' up to 'App' component
    // * This 'props.onAddExpense()' is pointing to 'addExpenseHandler()' in 'App' component
    props.onAddExpense(expenseData);
  };

  return (
    // * In JSX, we assign a class to a <div /> by 'className'
    <div className="new-expense">
      {/* We here render 'ExpenseForm' component and pass 'saveExpenseDataHandler' via 'props.onSaveExpenseData' */}
      {/* Please note that 'onAddExpense' in 'App' in now chained with 'onSaveExpenseData' in 'NewExpense' */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
