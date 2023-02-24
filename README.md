# Decentralized Kickstarter
Decentralized Kickstarter is a web application that allows users to create crowdfunding campaigns and raise funds in a decentralized and transparent way. The application is built on top of the Ethereum blockchain using Solidity smart contracts for the crowdfunding logic and Next.js and React for the front-end.

## Features
Create and manage crowdfunding campaigns with a customizable funding goal and deadline
Accept contributions in Ether from any Ethereum wallet
Display campaign details and progress, including the total amount raised and the number of contributors
Withdraw funds once the campaign reaches its funding goal
Refund contributions if the campaign does not reach its funding goal by the deadline
View a list of all campaigns and search for campaigns by keyword
Technologies Used
Next.js: a React framework for server-side rendering and static site generation
Solidity: a programming language for writing smart contracts on the Ethereum blockchain
Truffle: a development framework for building and testing Ethereum applications
Web3.js: a JavaScript library for interacting with the Ethereum blockchain
Ganache: a personal blockchain for local development and testing
Getting Started
Prerequisites
Node.js (version 12 or higher)
Ganache (for local development and testing)
MetaMask (for interacting with the application in a browser)
Installation
Clone the repository: git clone https://github.com/yourusername/decentralized-kickstarter.git
Install dependencies: cd decentralized-kickstarter && npm install
Usage
Start Ganache and import one of the provided private keys
Deploy the smart contract to the local blockchain: truffle migrate --reset
Start the Next.js development server: npm run dev
Open MetaMask and connect to the local blockchain network
Navigate to http://localhost:3000 in your browser to use the application
Testing
Start Ganache and import one of the provided private keys
Run the test suite: npm test
License
This project is licensed under the MIT License. See the LICENSE.md file for details.
