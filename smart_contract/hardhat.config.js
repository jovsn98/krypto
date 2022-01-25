// https://eth-ropsten.alchemyapi.io/v2/XHVI9J8eJT870oCLXVtwVrznPPcC_Bgx

require('@nomiclabs/hardhat-waffle');

module.export = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/XHVI9J8eJT870oCLXVtwVrznPPcC_Bgx',
      accounts: ['']
    }
  }
}