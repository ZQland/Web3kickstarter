import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const  instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    //address of the smart contract that was deployed
    '0x691e588BfEEC94f10F3A68a0E6135F93B65a220a'
);

export default instance;