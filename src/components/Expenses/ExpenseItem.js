import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

// * This 'ExpenseItem' is getting expense item data from 'Expenses' via 'props'
function ExpenseItem(props) {
  // * This 'useState()' is just a demonstration of how it works, but not really necessary for this 'expense-tracker' application
  // * First, we set the 'title' value which is also the displayed title to 'props.title'
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // * Here we just assign the 'title' with a value of "New item" for demonstration only
    setTitle("New item");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* Here we render a child component 'ExpenseDate' and pass the date value to it with 'props.date' */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* This 'title' is in 2-way binding, and its value is depended on 'useState()' */}
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* This 'onClick()' event will invoke 'clickHandler()' but just for demonstration purpose */}
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
}

// * Export this 'ExpenseItem' to parent 'Expenses'
export default ExpenseItem;
