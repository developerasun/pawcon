import * as dotenv from "dotenv"
import key from "./config/key"
import { HardhatUserConfig, task } from "hardhat/config"
import "@nomiclabs/hardhat-etherscan" // for etherscan contract verification
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "solidity-coverage"

dotenv.config()

// Ensure that we have all the environment variables we need.
const mnemonic: string | undefined = process.env.MNEMONIC
if (!mnemonic) {
  throw new Error("Please set your MNEMONIC in a .env file")
}

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// list of network chain IDs
const chainIds = {
  "arbitrum-mainnet": 42161,
  avalanche: 43114,
  bsc: 56,
  hardhat: 31337,
  mainnet: 1,
  "optimism-mainnet": 10,
  "polygon-mainnet": 137,
  "polygon-mumbai": 80001,
  rinkeby: 4,
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat", // dev network is hardhat
  solidity: {
    // version: "0.8.0",
    // set multiple compiler version
    compilers: [
      { version: "0.8.0" },
      { version: "0.8.1" },
      {
        version: "0.8.10",
        settings: {},
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      evmVersion: "london", // default value managed by solc
    },
  },
  networks: {
    // JSON-RPC based network
    ropsten: {
      url: key.PROVIDER.INFURA.TESTNET,
      accounts:
        key.ROPSTENNETWORK !== undefined
          ? [key.ROPSTENNETWORK.ACCOUNT[1].privateKey]
          : [],
    },
    ganache: {
      url: key.PROVIDER.GANACHE.URL,
      chainId: key.PROVIDER.GANACHE.CHAINID, // ganache chain id
      gas: "auto",
      gasPrice: "auto",
      timeout: 40000, // default value is 40000
    },
    // mainnet: {
    //   url: "Ethereum mainnet api here",
    //   accounts: ["PK here"]
    // }
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: key.COINMARKETCAPAPI, // for gas reporter
    currency: "KRW",
    src: "./contracts",
  },
  etherscan: {
    apiKey: key.ETHERSCANAPI,
  },
  mocha: {
    timeout: 40000,
    color: true,
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
}

export default config
