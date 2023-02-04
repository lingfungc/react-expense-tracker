import "./ExpenseDate.css";

// * This 'ExpenseDate' component aims to convert data types of date with 'day', 'month' and 'year'
function ExpenseDate(props) {
  // * This 'props.date' is inherited from 'ExpenseItem' component
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

// * Export this 'ExpenseDate' to parent 'ExpenseItem'
export default ExpenseDate;
