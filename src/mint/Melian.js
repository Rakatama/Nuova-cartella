import { useRive } from "rive-react";
import { useEffect, useState } from "react";
import melian from "./rivefiles/gold_ring.riv";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";

const contractAddress = "0x71c6Fb41Af24632890f5920E4d1F8907C8A2A6d6";

let abi = JSON.parse(
  '[{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addToRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableMelian","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enablePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableRangark","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableSabarian","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setPublicPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setRafflePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setSellingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setWhitelistPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"updateDevWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMelianID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRangarkID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSabarianID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rafflePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
);

export let nftsToMint = 0;
let isConn = false;
let myContract;
let signer;
let provider;

export default function Melian({ setMelianLoaded }) {
  const [riveLoaded, setRiveLoaded] = useState(false);
  const [nftInputNumber, setNFTInputNumber] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const { rive, RiveComponent } = useRive({
    src: melian,
    autoplay: true,
    artboard: "Melian",
    stateMachines: "Minting Machine",
    onStateChange: (e) => {
      const dataValue = e?.data[1];
      if (dataValue !== undefined && Number.isInteger(parseInt(dataValue))) {
        nftsToMint = parseInt(dataValue);
        setNFTInputNumber(dataValue);
        return;
      }
      if (isMobile) {
        if (e?.data[0] === "Click") {
          connect();
        }
      }
      if (!isMobile) {
        if (e?.data[0] === "Click") {
          connect();
        }
      }
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (rive) {
      setRiveLoaded(true);
      setMelianLoaded(true);
    }
  }, [rive]);

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
    if (nftsToMint > 0) {
      if (provider) {
        const amount = await checkAmount(nftsToMint);
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
    <div className="goldring_div_updated">
      <RiveComponent id="goldring_canvas" />
      {riveLoaded && (
        <div id="melian_div_child">
          <img
            src="/assets/images/Melian Marchio.webp"
            alt="melianmarchio"
            id="rangark_img"
          />
        </div>
      )}
    </div>
  );
}
