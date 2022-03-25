import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (element) => element.date.getUTCFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          addSelectedYear={selectedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
