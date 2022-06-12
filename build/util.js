"use strict";
exports.__esModule = true;
exports.createNFTFile = exports.getPublicKey = exports.getConnection = void 0;
var web3_js_1 = require("@solana/web3.js");
var fs = require("fs");
var DEV_NET_URL = 'https://api.devnet.solana.com';
var SOLANA_NETWORK = 'mainnet';
var SOLANA_NETWORK_COMMITMENT = 'confirmed';
var SOLANA_QUICKNODE_CONNECTION = '';
/**
 * Returns connection object to Solana RPC server.
 */
function getConnection() {
    // Devnet
    // return new Connection("https://sparkling-divine-frog.solana-devnet.quiknode.pro/7e35f0f6419ac6435467b552c16ee00567d5a56e/");
    // Mainnet
    return new web3_js_1.Connection(SOLANA_QUICKNODE_CONNECTION);
}
exports.getConnection = getConnection;
/**
 * Build Public Key from file in keys/ directory with provided name.
 */
var getPublicKey = function (name) {
    return new web3_js_1.PublicKey(JSON.parse(fs.readFileSync("./keys/".concat(name, "_pub.json"))));
};
exports.getPublicKey = getPublicKey;
var createNFTFile = function (nft, idx) {
    fs.writeFileSync("./nfts/".concat(idx, ".json"), JSON.stringify(nft));
};
exports.createNFTFile = createNFTFile;
