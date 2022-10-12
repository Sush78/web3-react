// https://eth-goerli.g.alchemy.com/v2/ZanUtb13BHboslQ2wHDlYdjF7sPRHqj6

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "insert url here",
      accounts: ['insert account here']
    }
  }
}
