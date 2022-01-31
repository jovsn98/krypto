require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/XHVI9J8eJT870oCLXVtwVrznPPcC_Bgx',
      accounts: ['e359ed2fe786ee9482dba4a1a65138652a28641ec73057aad55d9db8d48af4fc'],
    },
  },
};