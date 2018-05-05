import React, { Component } from 'react';
import './Styles.css';
import web3 from '../contract/web3';

import EnrollForm from './EnrollForm';
import StorageData from './StorageData';


class App extends Component {
  render() {
    web3.eth.getAccounts().then(console.log);
    return (
      <div className="App container">
        <h1> Enroll </h1>
        <EnrollForm />
        <StorageData />
      </div>
    );
  }
}

export default App;
