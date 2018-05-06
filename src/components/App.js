import React, { Component } from 'react';
import './Styles.css';

import Enroll from './Enroll';
import StorageData from './StorageData';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1> Admin </h1>
        <Enroll />
        <StorageData />
      </div>
    );
  }
}

export default App;
