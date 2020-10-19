let contactAddress = `0xa137E35Dc62AD97c214a6078dD825A728cD78866`; // FIXME: замените на адрес вашего контракта!
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
        gasPrice: 500000000,
    });
    await web3js.eth.sendTransaction(transaction)
}
