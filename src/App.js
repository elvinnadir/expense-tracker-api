import './App.css';
import Balance from './components/balance/Balance';
import Header from './components/header/Header';
import IncomeExpense from './components/incomeExpense/IncomeExpense';
import AddTransaction from './components/transactionList/AddTransaction';
import TransactionList from './components/transactionList/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
