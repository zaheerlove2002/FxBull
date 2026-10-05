import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

function App(){
 return <div className="app">
  <aside>
   <h2>FxBull</h2>
   <p>Dashboard</p>
   <p>Analytics</p>
   <p>Trade History</p>
   <p>Journal</p>
   <p>Strategies</p>
   <p>Broker Hub</p>
   <p>Settings</p>
  </aside>
  <main>
   <h1>Good Morning, Trader</h1>
   <div className="card big">
    <span>Today's P&L</span>
    <h2>+$0.00</h2>
   </div>
   <div className="grid">
    <div className="card">Win Rate<br/><b>0%</b></div>
    <div className="card">Total Trades<br/><b>0</b></div>
    <div className="card">Average Win<br/><b>$0</b></div>
    <div className="card">Average Loss<br/><b>$0</b></div>
   </div>
  </main>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);