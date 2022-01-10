
const SHA256 = require('crypto-js/sha256');
const hex2ascii = require ('hex2ascii');


const BlockchainClass = require('./blockchain');
const BlockClass = require('./block');

let bk = new BlockchainClass.Blockchain();
bk._addBlock(new BlockClass.Block('test 1'));
bk._addBlock(new BlockClass.Block('test 2'));





bk.validateChain().then(errorLog => {
    console.log(errorLog);
})

console.log(bk.chain);