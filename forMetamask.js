let contactAddress = `0xa137E35Dc62AD97c214a6078dD825A728cD78866`; 
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
        //await window.ethereum.enable();
        web3js = new Web3(web3.currentProvider)
        accounts = await web3js.eth.getAccounts()
        alert('метамаск подключен')
    }
};

async function callAirdropFunc() {
    transaction = ({
        from: accounts[0],
        to: contactAddress,
        value: 10000000000000,
        gas: 250000
    });
    await web3js.eth.sendTransaction(transaction)
}
