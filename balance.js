require("dotenv").config();
const axios = require("axios");

const apiUrl = process.env.ALCHEMY_API_URL;

// make a json rpc 2.0 method call to eth_blockNumber
async function getBalance() {
    const response = await axios.post(apiUrl, {
        jsonrpc: "2.0",
        method: "eth_getBalance",
        params: ["0x91ED85f505236c38F8311455Af82f199C9cEE2f3", "latest"],
        id: 1
    });


    const balance = response.data.result;
    // parse the balance to ether   
    const etherBalance = parseInt(balance) / 1e18;
    console.log(etherBalance);
}   

getBalance();
