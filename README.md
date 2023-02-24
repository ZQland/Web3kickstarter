# Decentralized Kickstarter
Decentralized Kickstarter is a web application that allows users to create crowdfunding campaigns and raise funds in a decentralized and transparent way. The application is built on top of the Ethereum blockchain using Solidity smart contracts for the crowdfunding logic and Next.js and React for the front-end.

## Features
* Create and manage crowdfunding campaigns with a customizable funding goal
* Accept contributions in Ether from any Ethereum wallet
* Display campaign details and progress, including the total amount raised, the number of contributors, requests made by fund manager, 
* Withdraw funds once the campaign request has been approved by majority of the contributors
* View a list of all campaigns and its requests
## Technologies Used
Next.js: a React framework for server-side rendering and static site generation. \

Solidity: a programming language for writing smart contracts on the Ethereum blockchain. \

Truffle: a development framework for building and testing Ethereum applications. \

Web3.js: a JavaScript library for interacting with the Ethereum blockchain. \

Ganache: a personal blockchain for local development and testing. 
## Getting Started
Prerequisites
Node.js (version 12 or higher)
Ganache (for local development and testing)
MetaMask (for interacting with the application in a browser)
## Installation
Clone the repository
Install dependencies: cd Web3kickstarter && npm install
## Usage
import your MetaMask mnemonic phrases and your infura endpoint
Deploy the smart contract to the infura test network blockchain(Goerli recommended): node deploy.js
Start the Next.js development server: npm run dev
Open MetaMask and connect to the Goerli blockchain network
Navigate to http://localhost:3000 in your browser to use the application
## Testing
Run the test suite: npm run test

## License
This project is licensed under the MIT License. See the LICENSE.md file for details.
