import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x66B0dB1174C18eAc93C622fA04687D5509ebec38';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}