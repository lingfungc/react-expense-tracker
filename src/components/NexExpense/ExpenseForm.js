// * We need to import { useState } in order to use 'useState()' in 'ExpenseForm'
import React, { useState } from "react";

// * Importing CSS, and this 'ExpenseForm' has no child at the stage
import "./ExpenseForm.css";

// * Define 'NewExpense' component, which gets data from parent 'NewExpense' component via (props)
const ExpenseForm = (props) => {
  // * We call 'useState()' which must return an array of 2 elements, and take 1 argument
  // * The 'useState()' will firstly assign the argument as a value to the first element in the returned array
  // * This assigning happens only when we render 'ExpenseForm' component at the first time
  // * The first element is the variable that we want to store data and pass data between parent and child
  // * The second element is the function-to-call when we assign a new value to the first element which is the variable
  // * Keep in mind that 'useState()' is important because it will re-render the 'ExpenseForm' component, and so the displayed value can be updated
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // * This 'submitHandler()' is a eventListener whenever a 'ExpenseForm' is submitted
  const submitHandler = (e) => {
    // * This is to prevent the page from reloading when the form is submitted, because React won't refresh page
    e.preventDefault();

    // * This 'expenseData' object store all data from submitted 'ExpenseForm' and converted all data types
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // * This 'expenseData' is passed from 'ExpenseForm' up to 'NewExpense' as argument via 'props.onSaveExpenseData()'
    // * This 'props.onSaveExpenseData' is pointing to 'saveExpenseDataHandler()' in 'NewExpense'
    props.onSaveExpenseData(expenseData);

    // * When the data in this 'ExpenseForm' is sent to 'NewExpense', which also means when the 'ExpenseForm' is submitted
    // * We will then reset the value for all input field in 'ExpenseForm' back to an empty value ""
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // * This 'titleChangeHandler()' is invoked when there is a change in 'title' field of the 'ExpenseForm'
  const titleChangeHandler = (e) => {
    // * Use 'useState()' with 'setEnteredTitle()' to update the 'enteredTitle' value
    // * The 'setEnteredTitle()' will only update the 'enteredTitle' value just before re-render the 'ExpenseForm' component
    // * It is somehow a asynchronous function
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // * Here is a  2-way binding to assign and update the value with 'enteredTitle' at the same time
            // * At first rendering, it will be assigned to the value of the argument in 'useState()'
            // * Later on, it will be assigned to the value of the argument in 'setEnteredTitle()' in 'titleChangeHandler()'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

// * Export this 'ExpenseForm' to parent 'NewExpense'
export default ExpenseForm;
