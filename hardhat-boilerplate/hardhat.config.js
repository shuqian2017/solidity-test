const { task } = require('hardhat/config');

require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-waffle');

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require('./tasks/faucet');

// this is a sample hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task('accounts', 'Prints the list of accounts', async () => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }

    console.log('\n The deploy address: %s', accounts[0].address);
});

// you need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/*
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
    solidity: '0.8.9',
    networks: {
        hardhat: {
            chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
        },
        ganache: {
            url: `http://127.0.0.1:7545`,
            accounts: [`b9ca4e75133fa7b477158ad8b8951b4093a026b0d8206483613bf43c42b38879`],
        },
    },
};
