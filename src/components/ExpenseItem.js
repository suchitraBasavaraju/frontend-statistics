import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>

      <div className="expense-item-title">
        <h2>{props.title} </h2>
        <div className="expense-item-price"> {props.amount}</div>
      </div>
    </div>
  );
}
