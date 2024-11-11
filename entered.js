require("dotenv").config();

const { createWalletClient, http, parseEther, parseAbi, publicActions } = require("viem")
const { privateKeyToAccount } = require("viem/accounts");
const { shapeSepolia } = require("viem/chains");
const bytecode = require("./bytecode.json");

const contractAddress = "0xd2124564BD96F654eBac33dAc3B15ce7Be712efF";
const abi = parseAbi([
    "function enter() public",
    "function leave() public",
    "function entered(address) public view returns (bool)"
]);

const apiUrl = process.env.ALCHEMY_API_URL;
const privateKey = process.env.PRIVATE_KEY;

const account = privateKeyToAccount(privateKey);

const walletClient = createWalletClient({
    account,
    chain: shapeSepolia,
    transport: http(apiUrl)
}).extend(publicActions);

async function deploy() {
    const tx = await walletClient.readContract({
        address: contractAddress,
        abi,
        functionName: "entered",
        args: ["0x91ED85f505236c38F8311455Af82f199C9cEE2f3"]
    });
    console.log(tx);
}

deploy();