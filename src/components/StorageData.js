import React, { Component } from 'react';
import './Styles.css';

import storage from '../contract/storage';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class StorageData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      electoralList: [],
      electoralCount: '',
      address: '',
      voterId: ''
    }
  }

  async componentDidMount() {
    const electoralList = await storage.methods.getElectoral().call();
    const electoralCount = await storage.methods.countElectoral().call();
    this.setState({ electoralList, electoralCount });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const voterId = await storage.methods.getVoterId(this.state.address).call();
    this.setState({ voterId });
  }

  render() {
    const {
      address,
    } = this.state;

    const isValid =
      address === '' ||
      address[0] !== '0' ||
      address[1] !== 'x' ||
      address.length !== 42;

    return (
      <div className="StorageData">

        <div className="ElectoralList col-md-5">
          <h3> Electoral List </h3>
          {
            this.state.electoralList.map(element =>
            <li key={element}>{element}</li>
          )}
        </div>

        <div className="ElectoralCount col-md-3">
          <h3> Electoral Count </h3>
          {this.state.electoralCount}
        </div>

        <form onSubmit={this.onSubmit} className="GetIdForm col-md-4">
          <h3> Get Voter Id </h3>
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
          <button disabled={isValid} type="submit" className="btn">
            Submit
          </button>
          <span> <h2> {this.state.voterId} </h2> </span>
        </form>

      </div>
    );
  }
}

export default StorageData;
