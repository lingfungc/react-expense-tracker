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

        <ExpenseItem
          // * This 'props.item' data is inherited from 'App' component
          // * This 'props.item' is an object storing the data with attributes 'title', 'amount' and 'date'
          // * Hence, we pass this 'props.item' directly to the 'ExpenseItem' component
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
}

// * Export this 'Expense' to parent 'App'
export default Expenses;
