import React, { Component } from 'react';
import './Styles.css';
import EnrollForm from './EnrollForm';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1> Enroll </h1>
        <EnrollForm />
      </div>
    );
  }
}

export default App;
