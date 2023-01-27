// TODO - Create a new component that is responsible for displaying expense
// TODO - Add multiple ExpenseItem components in that component
// TODO - Keep the expenses data in the App component and pass that data into the newly created component

import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
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
