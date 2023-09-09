// import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const Dummy_Expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses,setExpenses]=useState(Dummy_Expenses);
  const newDataHandler=(data)=>{
    // setExpenses([data,...expenses]);
    setExpenses((prevExpenses)=>{
      return [data,...prevExpenses];
    })
  }
  
  return (
    <div>
      <h1 style={{textAlign:"center" ,color:"white"}}>Expense Tracker</h1>
      <NewExpense newData={newDataHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
