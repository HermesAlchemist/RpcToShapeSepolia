require("dotenv").config();

const { privateKeyToAddress } = require("viem/accounts");

const privateKey = process.env.PRIVATE_KEY;
const address = privateKeyToAddress(privateKey);

console.log(address);