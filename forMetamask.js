let contactAddress = `0xb752BDBe2AD107B2938c711AffD8b2E8f00b32fB`; // FIXME: замените на адрес вашего контракта!
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
        gas: 100000,
        gasPrice: 5000000000,
    });
    await web3js.eth.sendTransaction(transaction)
}
