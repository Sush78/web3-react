// https://eth-goerli.g.alchemy.com/v2/ZanUtb13BHboslQ2wHDlYdjF7sPRHqj6

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ZanUtb13BHboslQ2wHDlYdjF7sPRHqj6",
      accounts: ['1ea0429d0e67a6dd4f34e5b81d7068042fab9dc8efd123531d94f3835269143a']
    }
  }
}