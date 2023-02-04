import React from "react";

import "./ExpenseFilter.css";

// * We can get data via 'props.onSelectedYear()' and 'props.selected' from 'Expenses' component
const ExpenseFilter = (props) => {
  // * This selectedYearHandler() event listener is invoked whenever user choose a year with the dropdown
  const selectYearHandler = (e) => {
    // * Whenever the user chooses a year (filter a year), we pass this year back to 'saveSelectYearHandler()' via 'props.onSelectYear()' to 'Expenses' component
    props.onSelectYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          name=""
          id=""
          // * The initial value of 'year' in this dropdown is inherited via 'props.selected' from 'Expenses' component
          value={props.selected}
          onChange={selectYearHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

// * Export this 'ExpenseFilter' to parent 'Expenses'
export default ExpenseFilter;
