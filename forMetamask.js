let contactAddress = `0xd31EEd6BaDDe46BFB9DE5AacbB8306c2F1D329D3`; // FIXME: замените на адрес вашего контракта!
let web3js;
let accounts;

async function connectMetamask() {
    const isMetaMaskInstalled = () => {
        const {ethereum} = window;
        return Boolean(ethereum&&ethereum.isMetaMask);
    };
    if(!isMetaMaskInstalled()){
        alert('метамаск отсутствует')
    } else {
        await window.ethereum.enable();
        web3js = new Web3(web3.currentProvider)
        alert('метамаск подключен')
    }
};

async function callAirdropFunc() {
    transaction = ({
        from: web3.currentProvider.selectedAddress,
        to: contactAddress,
        value: 100000000000000000,
        gas: 150000,
        gasPrice: 5000000000,
    });
    await web3js.eth.sendTransaction(transaction)
}
