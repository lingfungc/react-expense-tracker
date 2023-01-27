// TODO - Create a new component that is responsible for displaying expense
// TODO - Add multiple ExpenseItem components in that component
// TODO - Keep the expenses data in the App component and pass that data into the newly created component

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expense">
      <ExpenseItem
        title={props.expense.title}
        amount={props.expense.amount}
        date={props.expense.date}
      />
    </div>
  );
}

export default Expenses;
