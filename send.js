require("dotenv").config();

const { createWalletClient, http, parseEther } = require("viem")
const { privateKeyToAccount } = require("viem/accounts");
const { shapeSepolia } = require("viem/chains");

const apiUrl = process.env.ALCHEMY_API_URL;
const privateKey = process.env.PRIVATE_KEY;

const account = privateKeyToAccount(privateKey);

const walletClient = createWalletClient({
    account,
    chain: shapeSepolia,
    transport: http(apiUrl)
});

async function burn() {
    const tx = await walletClient.sendTransaction({
        to: "0x521e15D79866B308275ff3CBeEAD1212b854F872",
        value: parseEther(".00001")
    });

    console.log(tx);
}

burn();