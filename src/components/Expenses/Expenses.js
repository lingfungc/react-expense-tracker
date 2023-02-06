import React, { useState } from "react";

// * Importing CSS, Card (user interface) and children components
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  // * This is a 2-way binding to set and update value for 'selectedYear' in 'ExpenseFilter' component
  const [selectedYear, setSelectedYear] = useState("2021");

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
        {props.items
          .filter(
            (expense) =>
              expense.date.getFullYear() === parseInt(selectedYear, 10)
          )
          .map((expense) => (
            <ExpenseItem
              // * Normally, when there is a 'new expense' with 'useState()' for this 'expenses' array data
              // * React will add a 'ExpenseItem' <div> as the last item in this array list of 'ExpenseItem' <div>
              // * Then React will update all items and replace their content for every <div> inside this array list of 'ExpenseItem' to match the order of the items in this array list
              // * This is normally how React works but this is not a good practice because all items are now visited and edited, there is more chances to have bugs
              // * Bugs may be incurred when we also have other 'useState()'s on the items in this array list, those 'states' may be easily lost

              // * So, this 'key' prop is important for us to tell React that where is the 'new expense' item should be added
              // * We can always add this 'key' prop to every element to help React identify the individual items
              // * In this case and general cases, we should add this 'key' prop with an unique ID of the items in the array list
              // * We should always add this 'key' prop when mapping out list of items
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
