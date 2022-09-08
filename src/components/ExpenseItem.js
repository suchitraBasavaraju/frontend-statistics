import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 250.5;

  return (
    <div className="expense-item">
      <div> {expenseDate.toISOString()}</div>
      <div className="expense-item-title">
        <h2>{expenseTitle} </h2>
        <div className="expense-item-price"> {expenseAmount}</div>
      </div>
    </div>
  );
}
