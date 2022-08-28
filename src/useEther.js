import {ethers} from 'ethers';

const useEther = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum || '127.0.0.1:7545')
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    return signer;
}
 
export default useEther;