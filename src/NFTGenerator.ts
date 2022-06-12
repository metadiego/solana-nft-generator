import { createNFTFile, getConnection, getPublicKey } from './util';
import { SystemProgram, Transaction, sendAndConfirmTransaction, Keypair } from "@solana/web3.js";
import { NFTSpec } from './types';
// import { GetHolderData } from './GetHolderDataUpdate';

const CREATOR_ADDRESS = '2dEhA3XG9grcaDKgif7BrhHopBfBV16gRKsBnWgyXyVK';

function GetBaseNFT(creatorAddress: string, idx: number, imgUrl: string): NFTSpec {
  return {
    name: `Qwestive #1 Qwest - ${idx}`,
    symbol: 'QQ',
    description: `${idx}th edition of the very FIRST IRL Qwest created by the Qwestive team.`,
    seller_fee_basis_points: 500,
    image: imgUrl,
    attributes: [],
    properties: {
      creators: {
        address: creatorAddress,
        share: 10,
      },
      files: [],
    },
    collection: {
      name: 'Qwestive #1 Qwest',
      family: 'Qwestors'
    }
  };
}

const GenerateNFTFiles = () => {
  console.log('This function is beig called');
  for (let idx = 0; idx < 5; idx++) {
    // Runs 5 times, with values of step 0 through 4.
    createNFTFile(GetBaseNFT(CREATOR_ADDRESS, idx, ''), idx);
  }
};

GenerateNFTFiles();

module.exports = GenerateNFTFiles;
