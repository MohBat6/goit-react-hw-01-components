import React from 'react';
import './App.module.css';
import Profile from './components/Profile/Profile';
import user from "./user.json"
import statisticalData from "./statistical-data.json"
import StatisticsList from './components/Statistics/Statistics';
import friends from './friends.json';
import FriendList from './components/Friends/FriendsList';
import TransactionHistory from './components/Transaction-history/Transaction-history';
import transactions from './transactions.json';


function App() {
  return (
    <div>
    <Profile
    user={user}
    />
    <StatisticsList 
    title="Upload stats" 
    stats={statisticalData} />
    <h2>Список друзей</h2>
    <FriendList friends={friends} />
    <h2>История транзакций</h2>
    <TransactionHistory transactions={transactions} />
</div>
  );
}

export default App;
