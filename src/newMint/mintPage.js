import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import plusOff from "../assets/Plus off.svg";
import plusOn from "../assets/Plus On.svg";
import minusOff from "../assets/Minus Off.svg";
import minusOn from "../assets/Minus On.svg";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";
import five from "../assets/5.svg";
import btn from "../assets/Mint Off.svg";
import btnHover from "../assets/Mint On.svg";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";

const contractAddress = "0x71c6Fb41Af24632890f5920E4d1F8907C8A2A6d6";

let abi = JSON.parse(
  '[{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addToRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableMelian","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enablePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableRangark","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableSabarian","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setPublicPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setRafflePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setSellingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setWhitelistPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"updateDevWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMelianID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRangarkID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSabarianID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rafflePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
);

let isConn = false;
let myContract;
let signer;
let provider;

export default function MintPage({ setMelianLoaded }) {
  const [isBtnHovered, setBtnHover] = useState(false);
  const [isMHovered, setMHover] = useState(false);
  const [isPHovered, setPHover] = useState(false);
  const [toMint, setMint] = useState(1);
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const array = [one, two, three, four, five];

  useEffect(() => {
    setMelianLoaded(true);
  }, []);

  function btnmouseEnter() {
    setBtnHover(true);
    if (window.innerWidth < 600) {
      setTimeout(() => {
        setBtnHover(false);
      }, 500);
    }
  }

  function btnmouseLeave() {
    setBtnHover(false);
  }

  function minusMouseEnter(e) {
    setMHover(true);
    if (window.innerWidth < 600) {
      setTimeout(() => {
        setMHover(false);
      }, 500);
    }
  }

  function minusMouseLeave() {
    setMHover(false);
  }

  function plusMouseEnter() {
    setPHover(true);
    if (window.innerWidth < 600) {
      setTimeout(() => {
        setPHover(false);
      }, 500);
    }
  }

  function plusMouseLeave() {
    setPHover(false);
  }

  function increase() {
    if (toMint < 5) {
      setMint(toMint + 1);
    }
    if (window.innerWidth < 600) {
      plusMouseEnter();
    }
  }

  function decrease() {
    if (toMint > 1) {
      setMint(toMint - 1);
    }
    if (window.innerWidth < 600) {
      minusMouseEnter();
    }
  }

  provider = walletProvider;

  if (walletProvider && !isConn) {
    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    signer = ethersProvider.getSigner();
    myContract = new ethers.Contract(contractAddress, abi, signer);
    if (myContract) {
      isConn = true;
    }
  }

  async function connect() {
    if (window.innerWidth < 600) {
      btnmouseEnter();
    }
    if (toMint > 0) {
      if (provider) {
        const amount = await checkAmount(toMint);
        const toPay = await checkPrice();
        mint(amount, toPay);
      } else {
        alert("You must connect your wallet first!");
      }
    } else {
      alert("You must mint at least 1 NFT");
    }
  }

  async function checkAmount(number) {
    let amountToMint = 0;
    const tSupply = await myContract.totalSupply();
    const melianID = await myContract.maxMelianID();
    if (Number(melianID) - Number(tSupply) < number) {
      amountToMint = Number(melianID) - Number(tSupply);
    } else {
      amountToMint = number;
    }
    return amountToMint;
  }

  async function checkPrice() {
    let price = 0;
    const phase = await myContract.isWhitelist();
    if (phase) {
      price = ethers.utils.formatUnits(await myContract.whitelistPrice());
    } else {
      const phase2 = await myContract.isRaffle();
      if (phase2) {
        price = ethers.utils.formatUnits(await myContract.rafflePrice());
      } else {
        price = ethers.utils.formatUnits(await myContract.publicPrice());
      }
    }
    return price;
  }

  async function mint(n, p) {
    if (n > 0) {
      const fn = n.toString();
      var tprice = (fn * p).toString();
      try {
        const request = await myContract.mint(n, {
          from: address,
          value: ethers.utils.parseUnits(tprice),
        });
        await request.wait();
        alert("Minted Successfully!");
      } catch (err) {
        alert(err);
      }
    } else {
      alert("All Melian NFTs have been minted already!");
    }
  }

  return (
    <div className="page">
      <div className="pageBody">
        {window.innerWidth < 600 ? (
          <img
            src={isBtnHovered ? btnHover : btn}
            alt="image"
            className="mintBtn"
            onClick={connect}
            style={{ pointerEvents: "all" }}
          ></img>
        ) : (
          <img
            src={isBtnHovered ? btnHover : btn}
            alt="image"
            className="mintBtn"
            onMouseEnter={btnmouseEnter}
            onMouseLeave={btnmouseLeave}
            onClick={connect}
            style={{ pointerEvents: "all" }}
          ></img>
        )}

        <div className="elements">
          {window.innerWidth < 600 ? (
            <img
              src={isMHovered ? minusOn : minusOff}
              alt="image"
              className="minus"
              onClick={decrease}
              style={{ pointerEvents: "all" }}
            ></img>
          ) : (
            <img
              src={isMHovered ? minusOn : minusOff}
              alt="image"
              className="minus"
              onMouseEnter={minusMouseEnter}
              onMouseLeave={minusMouseLeave}
              onClick={decrease}
              style={{ pointerEvents: "all" }}
            ></img>
          )}

          <img src={array[toMint - 1]} className="number"></img>

          {window.innerWidth < 600 ? (
            <img
              src={isPHovered ? plusOn : plusOff}
              alt="image"
              className="plus"
              onClick={increase}
              style={{ pointerEvents: "all" }}
            ></img>
          ) : (
            <img
              src={isPHovered ? plusOn : plusOff}
              alt="image"
              className="plus"
              onMouseEnter={plusMouseEnter}
              onMouseLeave={plusMouseLeave}
              onClick={increase}
              style={{ pointerEvents: "all" }}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
