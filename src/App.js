import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

import { store } from "./store";
import {withdrawal, charity} from "./actions";

class App extends Component {
  // state = {
  //   username: "Janny",
  //   totalAmount: 2500701
  // };
  render() {
    // const { totalAmount, username } = this.state;
    return (
      <div className='App'>
        <img className='App__userpic' src={photographer} alt='user' />
        <p className='App__username'>Hello, {store.getState().username}!</p>
        <div className='App__amount'>
          {formatNumber({ prefix: '$' })(store.getState().balance)}
          <p className='App__amount--info'>Total Amount</p>
        </div>

        <section className='App__buttons'>
          <button data-amount='10000' onClick={dispatchWithdrawal}>
            WITHDRAW $10,000
          </button>
          <button data-amount='5000' onClick={dispatchWithdrawal}>
            WITHDRAW $5,000
          </button>
        </section>

        <button className='App__giveaway' onClick={dispatchDonateCharity}>Give away all your cash to charity</button>
      </div>
    );
  }
}

function dispatchWithdrawal(e) {
  const amount = e.target.dataset.amount;
  store.dispatch(withdrawal(amount))
}
function dispatchDonateCharity() {
  store.dispatch(charity())
}

export default App;
