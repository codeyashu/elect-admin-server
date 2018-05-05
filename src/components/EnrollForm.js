import React, { Component } from 'react';
import './Styles.css';
import storage from '../contract/storage';
import web3 from '../contract/web3';

const INITIAL_STATE = {
  address: '',
  voterID: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class EnrollForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    const status = await storage.methods.registerOnce(this.state.address, this.state.voterID).send({
      from: accounts[0]
    });
    console.log(status);
  }

  render() {
    const {
      address,
      voterID,
      error,
    } = this.state;

    const isValid =
      address === '' ||
      voterID === '' ||
      address[0] !== '0' ||
      address[1] !== 'x' ||
      address.length !== 42 ||
      voterID.length !== 5;

    return (
      <form onSubmit={this.onSubmit} className="EnrollForm col-md-4">
        <div className="form-group">
          <label>Address
          <input
              value={address}
              onChange={event => this.setState(byPropKey('address', event.target.value))}
              type="text"
              className="form-control"
              placeholder="Address"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Voter ID
          <input
              value={voterID}
              onChange={event => this.setState(byPropKey('voterID', event.target.value))}
              type="text"
              className="form-control"
              placeholder="Voter ID"
            />
          </label>
        </div>
        <button disabled={isValid} type="submit" className="btn">
          Submit
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


export default EnrollForm;

/* class EnrollForm extends Component {
  constructor(props) {
    super(props);

    this.State = {
      address: '',
      voterID: ''
    };
  }

  addressChange = (event) => {
    this.setState({ address: event.target.value })
  }

  voterIDChange = (event) => {
    this.setState({ voterID: event.target.value })
  }

  onSubmit = (event) => {
    const {
      address,
      voterID,
      password,
    } = this.state;
  }

  render() {
    const {
      address,
      voterID,
    } = this.State;

    const isValid =
      address === '' ||
      voterID === '';

    return (
      <div className="EnrollForm col-md-4 offset-md-4">
        <form onSubmit={this.onSubmit} className="EnrollFormForm">
          <div className="form-group">
            <label>Public Address
            <input
                value={address}
                onChange={this.addressChange}
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </label>
          </div>
          <div className="form-group">
            <label>Voter ID
            <input
                value={voterID}
                onChange={this.voterIDChange}
                type="text"
                className="form-control"
                placeholder="Voter ID"
              />
            </label>
          </div>
          <button disabled={isValid} type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
} */
