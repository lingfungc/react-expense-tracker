import React, { useState } from "react";

// * Importing CSS, Card (user interface) and children components
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  // * This is a 2-way binding to set and update value for 'selectedYear' in 'ExpenseFilter' component
  const [selectedYear, setSelectedYear] = useState("2019");

  // * This 'saveSelectYearHandler()' is for getting the data 'filteredYear' from 'ExpenseFilter' component
  const saveSelectYearHandler = (filteredYear) => {
    console.log("Selected Year is now passed to Expenses.js");
    console.log(filteredYear);

    setSelectedYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          // * Here passing 'saveSelectYearHandler()' via 'props.onSelectYear()' to 'ExpenseFilter' component
          onSelectYear={saveSelectYearHandler}
          // * Here passing value of 'selectedYear' via 'props.selected' to 'ExpenseFilter' component
          selected={selectedYear}
        />

        {/* This 'props.items' data is inherited from 'App' component */}
        {/* This 'props.items' is an object storing the data with attributes 'title', 'amount' and 'date' */}
        {/* Hence, we pass this 'props.items' directly to the 'ExpenseItem' component */}
        {/* This 'props.items.map()' returns us an array of data inherited from 'App' which each element is put in 'ExpenseItem' component */}
        {props.items.map((expense) => (
          <ExpenseItem
            // * Generally, when there is a 'new expense' with useState() for the 'expenses' array
            // * React will first add 1 more 'ExpenseItem' <div /> at top, and then re-assign the value(s) for every <div />, but this is not a good practice
            // * Because every 'ExpenseItem' <div /> will be re-assigned with new value and re-edited in this case
            // * The better practice should be only adding the new 'ExpenseItem' <div /> at top, but not editing any existing 'ExpenseItem' <div />
            // * In order to do this in React, we need to add 'key={expense.id}' inside <ExpenseItem /> component, so React will know these data should be stick with the respective 'ExpenseItem'
            // * Moreover, this 'key' should be an unique element, such as id ...
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

// * Export this 'Expenses' to parent 'App'
export default Expenses;
