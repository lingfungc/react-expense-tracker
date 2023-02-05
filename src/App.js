// * We need to import React package when we use the old way to create a React element
import React, { useState } from "react";

// * This is the old way to create a React element, which should be returned inside 'App' component
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Let's get started!"),
//   React.createElement(Expenses, { item: expenses })
// );

// * Import CSS when it is needed
// import "./App.css";

// * Importing child components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NexExpense/NewExpense";

// * This 'DUMMY_EXPENSES' is a hard-code data for demonstration
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// * Create a React component 'App'
const App = () => {
  // * We need to use 'useState()' for displaying expenses because we want to re-render 'Expenses' component when there is a new expense added
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // * This handler function is passed to 'NewExpense' component, and take data from 'NewExpense' as argument
  // * We can get this argument via 'props.onAddExpense(expenseData)' in 'NewExpense' component
  // * This is how we can access or pass data from-bottom-to-top, which is from child to parent component(s)
  const addExpenseHandler = (expenseData) => {
    console.log("Expense Data is now passed to App.js");
    console.log(expenseData);

    // * Keep in mind that we need to pass a function instead of a data to update 'expenses' with 'setExpenses()' for 'useState()'
    // * This is to ensure we can access the latest State for the value of 'expenses'
    // * This (prevExpenses) is then the latest State of the array for the elements of 'expenses'
    // * We then added the nex expenses data 'expenseDate' to the 'expenses' array with operator '...prevExpenses'
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  // * We can only return 1 element for each component, and need to group all things in a <div />, or <Card />
  // * This is JSX code inside this return() element
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Hello React</p>

      {/* We here render 'NewExpense' component and pass 'addExpenseHandler' via 'props.onAddExpense' */}
      <NewExpense onAddExpense={addExpenseHandler} />

      {/* We here render 'Expenses' component and pass 'expenses' via 'props.item' */}
      <Expenses items={expenses} />
    </div>
  );
};

// * We have to export the component to the parent component, which is 'index.js' in this case
export default App;
