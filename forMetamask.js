//FIXME: замените на адрес размещенного контракта!
let contactAddress = `0x1bd29B6dD80C20127203E632A9599Baa2fe1FA8c`; 
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
        accounts = web3js.givenProvider.selectedAddress
        console.log(accounts)
        alert('метамаск подключен')
    }
};

async function callAirdropFunc() {
    web3js = new Web3(web3.currentProvider);
    transaction = ({
        from: web3.currentProvider.selectedAddress,
        to: contactAddress,
        value: 10000000000000,
        gas: 2000000,
        gasPrice: 50,
    });
    await web3js.eth.sendTransaction(transaction)
}
