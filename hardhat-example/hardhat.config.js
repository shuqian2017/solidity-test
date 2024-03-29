require('@nomicfoundation/hardhat-toolbox');

/*
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            httpHeaders: 'fke',
        },
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
