import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenseList = [
    {
      'dateBought': new Date(2023, 7, 8),
      'price': 100_000,
      'name': 'Tata Harrier'
    },
    {
      'dateBought': new Date(2023, 7, 9),
      'price': 200_000,
      'name': 'Tata Punch'
    },
    {
      'dateBought': new Date(2023, 7, 10),
      'price': 104_000,
      'name': 'Tata Nexon'
    },
    {
      'dateBought': new Date(2023, 7, 11),
      'price': 120_000,
      'name': 'Tata Safari'
    }
  ]
  return (
    <div className="App">
      <ExpenseItem expenseList={expenseList}></ExpenseItem>
    </div>
  );
}

export default App;
