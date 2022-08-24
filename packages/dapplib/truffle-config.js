require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom problem brown turtle chaos rare remain essay hidden arctic olympic sunny'; 
let testAccounts = [
"0xeb23158cdd6acdba78ee6c50678f1e73c2752610b52dfe5d1f9d522a3c2be373",
"0xe2992a698134ed9644b9c571cec2b4b997db4dc641f15bda73c3192daa5cfabb",
"0x73f5e0435d77add4b3ecbcc80f8afe4d3123d85b660deb6bf6d2c0186a0efc8e",
"0xaba48c2a49fd4bd7db7be63a59478ff307858cef37a32cc6a901fef1ad3d0f54",
"0x0caf5959147184fc8a0801c07a0dc87eac7e865bf9852216759e1989efb4c20d",
"0x7e9496bcc8c3aebfa7ce51eb82c96b0acd1203d3ab2ecab00ea6d4d3505050ff",
"0x73aaf82d04dff0fd7f0f293b5ea6de6371265ffa8e5ac03bb1aadbfc03d342de",
"0x4f252df1aa24f9a831bb7034d04f7300bf340a5733eb4de6b2d2e8a99d8afefc",
"0xf09d46a559fe0cc6120ec8a17c2eb34e3e39140197bcd216a0ea23f25a4c7b15",
"0x1c2f846adc80285c7f9a4959985571d17229f9cefa151f80fbb4b07ed57b4b54"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


