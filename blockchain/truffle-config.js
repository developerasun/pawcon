
// ====================== Wallet setting ====================== //
// adjust here based on config later
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const key = require('./config/key')
const mnemonic = key.mnemonic;
const infuraTestnet = key.provider.INFURA.TESTNET;
const infuraMainnet = key.provider.INFURA.MAINNET;
const ipfs = key.ipfs;

// ====================== Wallet setting ====================== //

module.exports = {  
  contracts_directory: "./contracts",
  contracts_build_directory: "./build",
  migrations_directory:"./migrations",
  networks: {
    // ====================== Local network setting ====================== //
    // development network requires 1) host 2) port 3) network_id properties
    // truffle pre-defined network
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    // ====================== Local network setting ====================== //
    
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    
    // ====================== Public network setting ====================== //
    // FIX : deploy finished contracts to Ropsten testnet.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, key.provider.INFURA.TESTNET),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,      // Skip dry run before migrations? (default: false for public nets )
      ipfs : { 
          address: ipfs
      }
    },
    // ====================== Public network setting ====================== //
    

    // ====================== Private network setting ====================== //
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
    // ====================== Private network setting ====================== //
  },
  
  // ====================== Testing setting ====================== //
  // Set default mocha options here, use special reporters etc.
  mocha: {
    useColors: true, 
    timeout: 100000
  },
  // ====================== Testing setting ====================== //

  // ====================== Compiler setting ====================== //
  compilers: {

    solc: {
      version: "^0.8.10",    
      // docker: true,        
      settings: {          
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "london" // latest EVM version
      }
    }
  }
  // ====================== Compiler setting ====================== //
  
  // ====================== Truffle DB setting ====================== //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
  // ====================== Truffle DB setting ====================== //
};
