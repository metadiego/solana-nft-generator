import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";

import * as fs from "fs";
import { NFTSpec } from "./types";

const DEV_NET_URL = 'https://api.devnet.solana.com';
const SOLANA_NETWORK = 'mainnet';
const SOLANA_NETWORK_COMMITMENT = 'confirmed';


const SOLANA_QUICKNODE_CONNECTION = '';
/**
 * Returns connection object to Solana RPC server.
 */
export function getConnection(): Connection {
  // Devnet
  // return new Connection("https://sparkling-divine-frog.solana-devnet.quiknode.pro/7e35f0f6419ac6435467b552c16ee00567d5a56e/");
  // Mainnet
  return new Connection(SOLANA_QUICKNODE_CONNECTION);
}


/**
 * Build Public Key from file in keys/ directory with provided name.
 */
export const getPublicKey = (name: string) =>
  new PublicKey(
    JSON.parse(fs.readFileSync(`./keys/${name}_pub.json`) as unknown as string)
  );

export const createNFTFile = (nft: NFTSpec, idx: number, ) => {
  fs.writeFileSync(`./nfts/${idx}.json`, JSON.stringify(nft));
}