// TODO - Create a new component that is responsible for displaying expense
// TODO - Add multiple ExpenseItem components in that component
// TODO - Keep the expenses data in the App component and pass that data into the newly created component

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const saveSelectYearHandler = (filteredYear) => {
    console.log("Selected Year is now passed to Expenses.js");
    console.log(filteredYear);
    setSelectedYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onSelectYear={saveSelectYearHandler}
          selected={selectedYear}
        />

        <ExpenseItem
          // * To pass the data from Expenses (parent) to ExpenseItem (child)
          // * So we then can use "props.title" to access the data in ExpenseItem
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

    // <div className="expense">
    //   <ExpenseItem
    //     title={props.expense.title}
    //     amount={props.expense.amount}
    //     date={props.expense.date}
    //   />
    // </div>
  );
}

export default Expenses;
