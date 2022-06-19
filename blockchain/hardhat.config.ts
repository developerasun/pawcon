import * as dotenv from 'dotenv'
import { ethers } from 'hardhat'
import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan' // for etherscan contract verification
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import 'hardhat-contract-sizer'
import 'hardhat-log-remover'

dotenv.config()

const requireEnv = (argument: string) => {
    throw new Error(`${argument} is required in .env but missing.`)
}

// Ensure that we have all the environment variables we need.
const mnemonic: string | undefined = process.env.ACCOUNT_MNEMONIC_SEED
if (!mnemonic) {
    requireEnv('ACCOUNT_MNEMONIC_SEED')
}

// list of network chain IDs
const chainIds = {
    'arbitrum-mainnet': 42161,
    avalanche: 43114,
    bsc: 56,
    hardhat: 31337,
    mainnet: 1,
    'optimism-mainnet': 10,
    'polygon-mainnet': 137,
    'polygon-mumbai': 80001,
    rinkeby: 4,
    ganache: 1337,
}

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat', // dev network is hardhat
    solidity: {
        // version: "0.8.0",
        // set multiple compiler version
        compilers: [
            { version: '0.8.0' },
            { version: '0.8.1' },
            {
                version: '0.8.10',
                settings: {},
            },
        ],
        settings: {
            optimizer: {
                enabled: true,
                runs: 800,
            },
            evmVersion: 'london', // default value managed by solc
        },
    },
    networks: {
        // JSON-RPC based network
        ropsten: {
            url: process.env.TEST_ROPSTEN_URL
                ? process.env.TEST_ROPSTEN_URL
                : requireEnv('TEST_ROPSTEN_URL'),
            accounts:
                process.env.ACCOUNT_ROPSTEN_PRIVATE_KEY !== undefined
                    ? [process.env.ACCOUNT_ROPSTEN_PRIVATE_KEY]
                    : requireEnv('ACCOUNT_ROPSTEN_PRIVATE_KEY'),
        },
        ganache: {
            url: process.env.LOCAL_GANACHE_URL
                ? process.env.LOCAL_GANACHE_URL
                : requireEnv('LOCAL_GANACHE_URL'),
            chainId: chainIds.ganache, // ganache chain id
            gas: 'auto',
            gasPrice: 'auto',
            timeout: 40000, // default value is 40000
        },
        mainnet: {
            url: process.env.MAIN_ETHEREUM_URL
                ? process.env.MAIN_ETHEREUM_URL
                : requireEnv('MAIN_ETHEREUM_URL'),
            accounts:
                process.env.ACCOUNT_ETHEREUM_PRIVATE_KEY !== undefined
                    ? [process.env.ACCOUNT_ETHEREUM_PRIVATE_KEY]
                    : requireEnv('ACCOUNT_ETHEREUM_PRIVATE_KEY'),
        },
    },
    paths: {
        artifacts: './artifacts',
        cache: './byproducts/cache',
        sources: './contracts',
        tests: './test',
    },
    gasReporter: {
        enabled: process.env.PLUGIN_REPORT_GAS ? true : false,
        coinmarketcap: process.env.API_COINMARKETCAP_KEY, // for gas reporter
        currency: 'USD',
        src: './contracts',
    },
    etherscan: {
        apiKey: {
            ropsten: process.env.API_ETHERSCAN_KEY
                ? process.env.API_ETHERSCAN_KEY
                : requireEnv('API_ETHERSCAN_KEY'),
        },
    },
    mocha: {
        timeout: 40000,
        color: true,
    },
    typechain: {
        outDir: 'byproducts/typechain',
        target: 'ethers-v5',
    },
    // keep contract size less than 24kb for mainnet deployment
    contractSizer: {
        alphaSort: false,
        runOnCompile: true, // force to compile first
        disambiguatePaths: false,
        strict: true, // throw error when contract is over than 24kb
        only: [],
    },
}

export default config
