import React, { Component } from 'react';
import './App.css';

import Enroll from './Enroll';
import StorageData from './StorageData';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className="header"> Admin </h1>
        <Enroll />
        <StorageData />
      </div>
    );
  }
}

export default App;
