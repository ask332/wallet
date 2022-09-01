import logo from './logo.svg';
import './App.css';
import useEther from './useEther';
import Top from './Top';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from './Pay';
import { useState } from 'react';
import Send from './Send';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Account from './Account';
import { ethers, Wallet } from 'ethers';
import Home from './Home';


function App() {
  const signer = useEther();
  const [addr, setAddr] = useState("0x....");
  const [balance, setBalance] = useState("0.0");
  //Get address
  signer
  .then((e) => e.getAddress())
  .then((data)=>setAddr(data));
  //get balance
  signer
  .then((e) => e.getBalance())
  .then((data)=>setBalance(ethers.utils.formatEther(data)));
  //console.log(addr);


  return (
    <Router>
    <div className="App">
        <Top addr = {addr}/>
        <Switch>
          <Route  exact path = '/'>
            <Home />
          </Route>
          <Route  exact path = '/pay'>
            <Pay />
          </Route>
          <Route  exact path = '/send'>
            <Send />
          </Route>
          <Route  exact path = '/account'>
            <Account addr = {addr} balance = {balance}/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
