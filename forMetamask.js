let contactAddress = `0xa137E35Dc62AD97c214a6078dD825A728cD78866`; 

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
    let web3js = new Web3js(web3.currentProvider)

    transaction = ({
        from: web3js.givenProvider.selectedAddress,
        to: contactAddress,
        value: 10000000000000,
        gas: 210000
    });

    web3js.eth.sendTransaction(transaction)
}
