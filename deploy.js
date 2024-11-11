require("dotenv").config();

const { createWalletClient, http, parseEther } = require("viem")
const { privateKeyToAccount } = require("viem/accounts");
const { shapeSepolia } = require("viem/chains");
const bytecode = require("./bytecode.json");

const apiUrl = process.env.ALCHEMY_API_URL;
const privateKey = process.env.PRIVATE_KEY;

const account = privateKeyToAccount(privateKey);

const walletClient = createWalletClient({
    account,
    chain: shapeSepolia,
    transport: http(apiUrl)
});

async function deploy() {
    const tx = await walletClient.sendTransaction({
        data: "0x" + bytecode.contracts["World.sol:World"].bin,
    });
    console.log(tx);
}

deploy();