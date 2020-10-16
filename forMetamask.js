let contactAddress = `0xa137E35Dc62AD97c214a6078dD825A728cD78866`; 
let web3js;

function connectMetamask() {
    const isMetaMaskInstalled = () => {
        const {ethereum} = window;
        return Boolean(ethereum&&ethereum.isMetaMask);
    };
    if(!isMetaMaskInstalled()){
        alert('метамаск отсутствует')
    } else
        alert('метамаск подключен')
};

function callAirdropFunc() {
    web3js = new Web3(web3.currentProvider)

    transaction = ({
        from: web3js.eth.accounts[0],
        to: contactAddress,
        value: 10000000000000,
        gas: 250000
    });

    web3js.eth.sendTransaction(transaction)
}
