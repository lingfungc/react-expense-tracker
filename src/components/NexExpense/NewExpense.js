import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // This enteredExpenseData should be pointing to the expenseData inside ExpenseForm component
  // This saveExpenseDataHandler will send the data to the props onSaveExpenseData
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* The value of this onSaveExpenseData props should be a function */}
      {/* This function which is triggered when sth happens inside of this component (ExpenseForm) */}
      {/* When user saves the enteredExpenseData by submitting the form */}
      {/* When we set up a props here, that means we are passing a props to ExpenseForm as an argument */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
