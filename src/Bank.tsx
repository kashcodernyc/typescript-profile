import React from 'react'
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/index';

function Bank() {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector((state: State) => state.bank)
  return (
    <div className="App">
        <h1>{amount}</h1>
        <button onClick={() => depositMoney(10)}>Deposit</button>
        <button onClick={() => withdrawMoney(10)}>Withdraw</button>
        <button onClick={() => bankrupt()}>WithdrawBankrupt</button>
    </div>
  )
}

export default Bank