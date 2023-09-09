import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const[title,setTitle]=useState('');
    const[amount,setAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const titleChangeHandler =(event)=>{
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
      setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };

    const submitHandler=(event)=>{
      event.preventDefault();


      const detailData={title:title,date:new Date(enteredDate),price:+amount};
      props.onSaveExpenseData(detailData);
      setAmount('');
      setTitle('');
      setEnteredDate('');
    }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="new-expense__actions"
          onClick={props.stopEditingHandler}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="new-expense__actions"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm
