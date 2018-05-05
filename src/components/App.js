import React, { Component } from 'react';
import './Styles.css';

import EnrollForm from './EnrollForm';
import StorageData from './StorageData';


class App extends Component {
  render() {
      return (
      <div className="App container">
        <h1> Admin </h1>
        <EnrollForm />
        <StorageData />
      </div>
    );
  }
}

export default App;
