const EDCoinCrowdSale = artifacts.require("EDCoinCrowdSale");
const EDCoin = artifacts.require("EDCoin");

const Web3 = require('web3')

function ether(n) {
  return new Web3.utils.BN(Web3.utils.toWei(n, 'ether'));
}

module.exports = function (deployer, network, accounts) {
  const startTime = new Web3.utils.BN(Math.floor(new Date().getTime() / 1000)); // Now
  const endTime = new Web3.utils.BN(Math.floor(new Date(2022, 8, 8, 8, 8, 8, 0).getTime() / 1000)); // Sale Stop at 8 August 2020 @08:08:08
  const rate = new Web3.utils.BN(20000); // At 20,000 Token/ETH
  const wallet = accounts[0];
  const goal = ether('5000');
  const cap = ether('100000');

  let token, crowdsale;
  deployer.then(function () {
    return EDCoin.new({from: wallet});
  }).then(function (instance) {
    token = instance;
    return EDCoinCrowdSale.new(startTime, endTime, rate, wallet, cap, token.address, goal);
  }).then(function (instance) {
    crowdsale = instance;
    token.addMinter(crowdsale.address);
    console.log('Token address: ', token.address);
    console.log('Crowdsale address: ', crowdsale.address);
    return true;
  });
};