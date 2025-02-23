
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import Clock from "./components/Clock";
import { useState } from "react";

function App() {

  const [expenses, setExpenses] = useState([
    { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Clock />
      <Expenses items={expenses} />
    </div>

  );
}

export default App;
