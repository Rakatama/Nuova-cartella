import FAQ from "./FAQ";
import React, { useEffect, useState } from "react";
import { setDataLoaded } from "../store/loadSlice";
import { useDispatch } from "react-redux";
function Toggle() {
  const [faqs, setfaqs] = useState([
    {
      question: "WHAT IS PROJECT VALAROK?",
      answer:
        "Project Valarok tells the story of three races bound by an ancient power on Earth, embodied in a hand-drawn unique NFT collection. It provides access to content, privileges, and unique resources, creating a community to share new experiences and possibilities.",
      open: true,
    },
    {
      question: "WHAT ARE OUR TEAM'S GOALS?",
      answer:
        "Our team is dedicated to developing the Valarok universe in the entertainment sector, generating value for NFT holders, and positioning the collection as a globally recognized brand.",
      open: false,
    },
    {
      question: "WHAT NETWORK WILL IT USE?",
      answer: "The project will be based on the ETH blockchain.",
      open: false,
    },
    {
      question: "WHEN WILL THE LAUNCH HAPPEN?",
      answer:
        "Stay updated on X and Discord for the launch date. Sales will commence with the Whitelist, followed by the Raffle and, finally, the public sale.",
      open: false,
    },
    {
      question: "WHAT WILL BE THE PRICES?",
      answer:
        "The launch prices will be: \n - 0.022 ETH for the Whitelist \n -0.027 ETH for the Raffle \n - 0.029 ETH for the Public Sale",
      open: false,
    },
    {
      question: "HOW MANY NFTS WILL THERE BE?",
      answer:
        "The Melian, Sabrian, and Rangark collection will feature 4888 NFTs of various rarities for each race.",
      open: false,
    },
    {
      question: "WHEN WILL THE REVELATION OCCUR?",
      answer:
        "The revelation of NFTs will be announced on X and Discord. Your NFT will automatically unveil in your wallet at the end of the predetermined period.",
      open: false,
    },
    {
      question: "WHY SHOULD I OWN A VALAROK NFT?",
      answer:
        'The "utility" section will outline the reasons to join this unique community, bringing content, benefits, and value to owners.',
      open: false,
    },
    {
      question: "WHY three DIFFERENT RACES?",
      answer:
        "Choose your side of the story among three distinct factions with intertwined destinies, each with unique ideas, characteristics, and opportunities.",
      open: false,
    },
    {
      question: "WHAT IS COCOA?",
      answer:
        "Cocoa will be Valarok's main token, used as a currency. By staking your NFT, you'll earn 3 Cocoa per day for 10 years.",
      open: false,
    },
    {
      question: "WHAT IS ETHARK?",
      answer:
        "Ethark will be a rare Valarok token with a special purpose, representing the most precious and sought-after resource in Valarok.",
      open: false,
    },
    {
      question: "WHAT ARE META AND ANCIENTS?",
      answer:
        "Meta and Ancients are NFTs obtainable through undisclosed requirements, not directly purchasable. Only 300 Meta and 36 Ancients will be available, offering immense benefits and value to owners.",
      open: false,
    },
    {
      question: "ARE NFTS RESELLABLE?",
      answer:
        "Valarok NFTs will be manageable as you prefer and always resellable through the Opensea platform.",
      open: false,
    },
    {
      question: "AND CHARITY?",
      answer:
        "Each race will be associated with donations to charitable organizations such as Oceana, Eden Reforestation Projects, and WWF, with donations published on social channels. We contribute to our planet because we are a part of it.",
      open: false,
    },
    {
      question: "HOW TO BECOME A CITIZEN OF VALAROK?",
      answer: `Becoming a citizen of Valarok is easy and quick! Simply install the MetaMask extension on your Chrome browser and connect it to your Ethereum wallet. \n\n Make sure you have enough ETH in your wallet to cover the cost of the NFT and transaction fees (GAS). Once done, approve the transaction on MetaMask and be part of this fantastic world. \n\n To purchase Ethereum, you can follow the instructions provided on the Ethereum website: https://ethereum.org/en/get-eth/ \n To set up and fund a MetaMask wallet, refer to the FAQ section on the MetaMask website: https://metamask.io/faqs/`,
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDataLoaded(true));
  }, []);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div id="faq-back">
      {/* <Header /> */}
      <div className="faqs">
        <div style={{ marginTop: "150px" }}></div>
        <h1 id="fh1">FAQs</h1>
        <div className="f-underline"></div>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Toggle;
