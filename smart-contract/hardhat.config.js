require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      // alchemyHTTPForCrypticProject
      url: "https://eth-goerli.g.alchemy.com/v2/fupalbQQb1dxY1qamVD59xLXycioZN6E",

      // privateKeyForCrypticWallet
      accounts: [process.env.REACT_APP_WALLET_PRIVATE_KEY],
    },
  },
};
