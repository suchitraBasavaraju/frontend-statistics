import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div> March 28th 2021</div>
      <div className="expense-item-title">
        <h2>Car insurance </h2>
        <div className="expense-item-price"> $250.50</div>
      </div>
    </div>
  );
}
