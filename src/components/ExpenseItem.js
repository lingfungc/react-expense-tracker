import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 0, 27);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 89.64;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
