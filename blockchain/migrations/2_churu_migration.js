// artifacts.require('contractName')
const Churu = artifacts.require("Churu");

module.exports = function (deployer) {
  deployer.deploy(Churu);
};
