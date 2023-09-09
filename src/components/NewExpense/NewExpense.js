import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [addExpense, setAddExpense] = useState(false);
  const saveExpenseDataHandler= (enteredData) => {
    const expenseData = {...enteredData,id:Math.random.toString()}
    
    props.newData(expenseData);
    setAddExpense(false);
  }

  const startEditingHandler =()=>{
    setAddExpense(true);
  }

  const stopEditingHandler=()=>{
    setAddExpense(false)
  }

  return (
    <div className="new-expense">
      {addExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditingHandler={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense
