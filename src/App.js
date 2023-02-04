// * We need to import React package when we use the old way to create a React element
// import React from "react";

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

// * Create a React component 'App'
const App = () => {
  // * This 'expenses' is a hard-code data for demonstration
  const expenses = [
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

  // * This handler function is passed to 'NewExpense' component, and take data from 'NewExpense' as argument
  // * We can get this argument via 'props.onAddExpense(expenseData)' in 'NewExpense' component
  // * This is how we can access or pass data from-bottom-to-top, which is from child to parent component(s)
  const addExpenseHandler = (expenseData) => {
    console.log("Expense Data is now passed to App.js");
    console.log(expenseData);
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
      <Expenses item={expenses} />
    </div>
  );
};

// * We have to export the component to the parent component, which is 'index.js' in this case
export default App;
