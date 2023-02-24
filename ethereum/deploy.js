const HDWalletProvider = require('@truffle/hdwallet-provider');
const { compile } = require('solc');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'stadium nest grid target until age verb neither badge ladder current indoor',
  'https://goerli.infura.io/v3/2fc1de650c854c3fae604367fd69a65f'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[1]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: '1400000', from: accounts[1] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
