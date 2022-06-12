"use strict";
exports.__esModule = true;
var util_1 = require("./util");
// import { GetHolderData } from './GetHolderDataUpdate';
var CREATOR_ADDRESS = '2dEhA3XG9grcaDKgif7BrhHopBfBV16gRKsBnWgyXyVK';
function GetBaseNFT(creatorAddress, idx, imgUrl) {
    return {
        name: "Qwestive #1 Qwest - ".concat(idx),
        symbol: 'QQ',
        description: "".concat(idx, "th edition of the very FIRST IRL Qwest created by the Qwestive team."),
        seller_fee_basis_points: 500,
        image: imgUrl,
        attributes: [],
        properties: {
            creators: {
                address: creatorAddress,
                share: 10
            },
            files: []
        },
        collection: {
            name: 'Qwestive #1 Qwest',
            family: 'Qwestors'
        }
    };
}
var GenerateNFTFiles = function () {
    console.log('This function is beig called');
    for (var idx = 0; idx < 5; idx++) {
        // Runs 5 times, with values of step 0 through 4.
        (0, util_1.createNFTFile)(GetBaseNFT(CREATOR_ADDRESS, idx, ''), idx);
    }
};
GenerateNFTFiles();
module.exports = GenerateNFTFiles;
