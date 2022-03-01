import * as dotenv from "dotenv";
import key from './config/key';
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  defaultNetwork: "development", // dev network is ganache
  solidity: {
    version : "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }, 
      evmVersion : 'london' // default value managed by solc
    }, 
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    // JSON-RPC based network
    ropsten: {
      url: key.PROVIDER.INFURA.TESTNET,
      // HD wallet config
      accounts: {
        mnemonic: key.HDWALLET.MNEMONIC, 
        path: "m/44'/60'/0'/0", // default 
        initialIndex: 0,  // default
        count: 20, // default
      }
        // process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    development: {
      url: key.PROVIDER.GANACHE.URL,
      chainId: key.PROVIDER.GANACHE.CHAINID, // ganache chain id
      gas: "auto", 
      gasPrice: "auto",
      timeout: 40000 // default value is 40000
    }, 
    // hardhat network
    hardhat: { }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 40000,
    color: true
  }
};

export default config;
