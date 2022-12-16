require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
const { API_URL, PRIVATE_KEY } = process.env;
/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/Fpij4Sg2UR5oRM-WXmEgnTt2BPsT14yu",
            accounts: ["8a6a1393eaa45f86b147150ef7d0093b07ad6d39d246e8db9dd6995eb324c4c7"]
        }
    },
};