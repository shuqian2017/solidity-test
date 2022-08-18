import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/config';

/*
 * @type import('hardhat/config').HardhatUserConfig
 */

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {},
        // rinkeby: {
        //     url: 'https://eth-mainnet.alchemyapi.io/v2/123abc123abc123abc123abc123abcde',
        //     accounts: [privateKey1, privateKey2],
        // },
    },
    solidity: {
        version: '0.8.9',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    paths: {
        sources: './contracts',
        tests: './test',
        cache: './cache',
        artifacts: './artifacts',
    },
    mocha: {
        timeout: 20000,
    },
};

export default config;
