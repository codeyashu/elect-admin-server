import React, { Component } from 'react';
import './Enroll.css';

import storage from '../contract/storage';
import web3 from '../contract/web3';

const INITIAL_STATE = {
  address: '',
  voterID: '',
  status: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Enroll extends Component {
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
    this.setState({ status: JSON.stringify(status) });
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
      <div className="Enroll">

        <form onSubmit={this.onSubmit} className="EnrollForm col-md-4">
          <h3>Enroll</h3>
          <div className="form-group">
            <label>
              <h5>Address</h5>
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
            <label>
              <h5>Voter ID</h5>
              <input
                value={voterID}
                onChange={event => this.setState(byPropKey('voterID', event.target.value))}
                type="text"
                className="form-control"
                placeholder="Voter ID"
              />
            </label>
          </div>
          <button disabled={isValid} type="submit" className="btn button">
            Submit
          </button>
          {error && <p>{error.message}</p>}
        </form>

        <div className="EnrollStatus col-md-8">
          <h3>Status</h3>
          <h6>{this.state.status}</h6>
        </div>

      </div>
    );
  }
}

export default Enroll;
