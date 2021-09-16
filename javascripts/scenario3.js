function connectToMetMask() {
    ethereum.enable().then(result => {
        console.log("Account: ",result);
    })
}

$(document).ready(function () {
    const web3 = new Web3(ethereum);
    console.log("Connection Object: ",web3);

    const contractAddress = "0xB19e449b6A63118EeF136524ABb53366819Efaa4";
    const contractAbi = [
        {
        "inputs": [],
        "name": "getMessage",
        "outputs": [
        {
        "internalType": "string",
        "name": "",
        "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function"
        }
       ];
    myContract = new web3.eth.Contract(contractAbi, contractAddress);
    console.log("Contract Object: ",myContract);
    
   
   

})