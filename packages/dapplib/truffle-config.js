require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant hover entry bridge veteran'; 
let testAccounts = [
"0xb301440aa3f723f0e9bc2784421d3171c9acdab11fbf942fe958902676acb1ee",
"0x3f7535ff86848e579a17974bdc05a25069e0714c70dd574fa233a686eaa8ed8d",
"0x98b5d09428d27dbddf5d7525e209795235a11d9916ffd7c68d3fbbcfe8257b66",
"0x4d0486c8a6fb80537ade05d4b4f48439fe50b8bf6ef0715a8b4edb0aab5b3f52",
"0x7cbc72e69797a99e048b953c3d5cad3b07c50d0c6451b1ad0920efdd5a362602",
"0x775637099e5e36d70d2388716a43121de303fdabc64f576aa6cb33ef0b08f7f4",
"0x14c4d6ddda19ee8517766463b0c3c7f4209774099534e9fccde0765f87883a06",
"0xa034bdde86a707c84459e3c30867bc43343841f38634970a1b33a30cab593201",
"0xeaeeb813907e421a24b9503aca8115e13dc3b10b42eaab182fe9ae4e9112db34",
"0xec4a2f7950f5475f68ac254e60c3664dccf735e1457b31b1c55a230e6c18d084"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
