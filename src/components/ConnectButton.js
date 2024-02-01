import React, { useEffect, useState } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import {
  useWeb3Modal,
  useWeb3ModalState,
  useWeb3ModalEvents,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";

import connectwallet from "./rivefiles/music_player.riv";
import { connect } from "react-redux";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { open: opened } = useWeb3ModalState();
  const { address, isConnected } = useWeb3ModalAccount();

  const events = useWeb3ModalEvents();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { rive, RiveComponent } = useRive({
    src: connectwallet,
    autoplay: true,
    artboard: "Connect Wallet",
    stateMachines: "Connect Wallet",
    onStateChange: (e) => {
      if (isMobile) {
        if (e.data[0] === "Connecting Wallet") {
          console.log("state change");
          open();
        }
      }
    },
  });

  const connectWallet = useStateMachineInput(
    rive,
    "Connect Wallet",
    "Wallet Connected"
  );

  const connectingWallet = useStateMachineInput(
    rive,
    "Connect Wallet",
    "Clicked"
  );

  useEffect(() => {
    if (isConnected && connectWallet) {
      connectWallet.value = true;
    }
  });

  useEffect(() => {
    if (events.data.event === "MODAL_CLOSE" && !isMobile && !isConnected) {
      window.location.reload();
    }
  });

  useEffect(() => {
    if (
      events.data.event === "MODAL_CLOSE" &&
      isMobile &&
      !isConnected &&
      !opened
    ) {
      connectingWallet.value = false;
    }
  }, [events, isMobile, isConnected, opened]);

  const ConnectWallet = async () => {
    open();
  };

  return (
    <div className="connect_wallet">
      <RiveComponent id="con-button" onClick={ConnectWallet} />
    </div>
  );
}
