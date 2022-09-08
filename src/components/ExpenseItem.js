import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div> {month}</div>
      <div> {day}</div>
      <div> {year}</div>

      <div className="expense-item-title">
        <h2>{props.title} </h2>
        <div className="expense-item-price"> {props.amount}</div>
      </div>
    </div>
  );
}
