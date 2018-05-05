import React, { Component } from 'react';
import './Styles.css';
import storage from '../contract/storage';

class StorageData extends Component {

  constructor(props) {
    super(props);

    this.state = {
      electoralList: [],
      electoralCount: ''
    }
  }

  async componentDidMount() {
    const electoralList = await storage.methods.getElectoral().call();
    const electoralCount = await storage.methods.countElectoral().call();
    this.setState({ electoralList, electoralCount });
  }

  render() {
    return (
      <div className="StorageData">
        <div className="ElectoralList">
          <h3> Electoral List </h3>
          {this.state.electoralList}
        </div>
        <div className="ElectoralCount">
          <h3> Electoral Count </h3>
          {this.state.electoralCount}
        </div>
      </div>
    );
  }
}

export default StorageData;
