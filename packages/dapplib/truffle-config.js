require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe street cost praise connect gesture ghost army giggle'; 
let testAccounts = [
"0x883030af92ba3ad0bccd2c6c43ad68a6e10bbd5bf10bd8fe466cc6856b94bb4a",
"0x2b2964a7fda9a6471ac9223a23b8d11ee98146c9e28d6007a78a8fa992145ed9",
"0xd913e0dce379835252dfcd8fd073d0ffdd05673e696eeb20762453ae9358a15b",
"0x24603b471d239301461d0ddc896937234a7be65a9f018e4ad1177d9406da437d",
"0x4820144f50b55c26b20daf7ee107c53af86edecfce3b17582adb0e5879b954b8",
"0xfef965d001fe8fea668f19aef2065b302b4b80b353ee4c22fde131fd4c96c595",
"0x86a09c1c4a3092c72c70fca3ddc18a1d93db86bcf9ab62c4d44c61c06fa06216",
"0x7a37cfa1d0c833d86451cc7670d949df6d0be1306308c06c905861e89d94ac28",
"0x85027e8dc56bf1b01fd8a46be526239a325e37b91a6370034ca62d7a612f28ca",
"0x194921418470c7d87bd1bab4da5bf9755773411fb7103b7b1fd8b59a8ad5d309"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


