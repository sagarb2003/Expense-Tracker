import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.price}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
