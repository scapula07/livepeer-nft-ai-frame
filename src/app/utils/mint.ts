import { abi } from "./abi";
const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_URL)

const wallet = new ethers.Wallet(
  process.env.SERVER_WALLET_PRIVATE_KEY,
  provider
);

const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  abi,
  wallet
);

export const mint = async (address: string, uri: string,tokenId:number) => {
  try {
    console.log(address, uri);
    const tx = await contract.safeMint(tokenId,uri);
    console.log(tx);
    return tx; 
  } catch (error) {
    console.log("Minting error");
  }
}


export const getConnectedAddressForUser = async (fid: number) => {
  const res = await fetch(`https://hub.pinata.cloud/v1/verificationsByFid?fid=${fid}`)
  const json = await res.json();

  return json
}