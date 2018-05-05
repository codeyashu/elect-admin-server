// Use Metamask provider for our local copy of web3
// So that we can use metamask accounts and web3 v1.0

import Web3 from 'web3';

// Metamask injects web3 to window object on all sites
const web3 = new Web3(window.web3.currentProvider);

export default web3;
