import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    //this means we are in the browser and metamask is running
    window.ethereum.request({ method: "eth_requestAccounts"});
    web3 = new Web3(window.ethereum);
} else {
    // we are on the next server AND/OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://goerli.infura.io/v3/2fc1de650c854c3fae604367fd69a65f"
    );
    web3 = new Web3(provider);
}



 export default web3;