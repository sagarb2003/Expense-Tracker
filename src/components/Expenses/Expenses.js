import React,{useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({expenses}) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const getYear =(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const selectedYearExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} getYear={getYear} />
        <ExpensesChart expenses={selectedYearExpenses}/>
        <ExpensesList items={selectedYearExpenses} />
      </Card>
    </div>
  );
}

export default Expenses
