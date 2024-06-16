import 'hardhat-deploy';
import 'solidity-coverage';
import "hardhat-gas-reporter";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-toolbox";

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.7.5",
                settings: {
                    optimizer: {
                      enabled: true,
                      runs: 200,
                    },
                  },
            },
        ],
    },
    networks: {
        arbitrum: {
            url: 'https://arb-sepolia.g.alchemy.com/v2/xtkyr45WuMHeLewhkGan8TfE1LcC3PbX',
            accounts: ['b31305b4bb08c86a4af55d76408afde7505a276116d4bc426611a5c41a241dec']
        }
    },
    namedAccounts: {
        deployer: {
            default: 0
        }
    },
    gasReporter: {
        enabled: true,
        currency: 'USD',
        L1: "ethereum",
        coinmarketcap: '9abc93cd-9be2-4485-8a1d-d031340c58c2'
      }
};