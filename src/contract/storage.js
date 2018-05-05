// Create local instance of deployed contract 

import web3 from './web3';

// Copy contract interface (ABI) and contract address from
// deployed lottery contract and paste in here

const address = '0x097F9EeCc16e93E9fcEE5a7bdE93F0bf01ECF1dC';

const abi = [{"constant":true,"inputs":[],"name":"getElectoral","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_id","type":"string"}],"name":"registerOnce","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getVoterId","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"deleteVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"countElectoral","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"},{"name":"_id","type":"string"}],"name":"checkElectoral","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_id","type":"string"}],"name":"registerAgain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

// Use address and abi to create local contract instance using web3 library
// This local copy acts as abstraction of deployed contract

export default new web3.eth.Contract(abi, address);
