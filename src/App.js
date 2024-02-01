import React, { useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/style_new.css";
import "./Styles/style_utility.css";
import MusicPlayer from "./home/MusicPlayer";
import MusicPlayerIos from "./home/MusicPlayerIos";
import Header from "./components/Header";
import ValarokIntro from "./components/ValarokIntro";
import { useSelector } from "react-redux";
import Home from "./pages/home";
import Story from "./pages/story";
import Atrium from "./pages/Atrium";
import Mint_Updated from "./pages/mint_updated";
import Utilities from "./pages/utilities";
import Roadmap from "./pages/roadmap";
import Toggle from "./pages/toggle";
import Terms from "./pages/Terms";
import { getMobileOperatingSystem } from "../src/home/Device";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

const projectId = "e1b5abe839a71edd27768a2617f23b97";

// 2. Set chains

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create modal
const metadata = {
  name: "VALAROK",
  description: "My Website description",
  url: "https://valarok.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
});

export function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = "scroll");
  }, []); // Empty array ensures effect is only run on mount and unmount
}

function App() {
  let os = getMobileOperatingSystem();
  const isDataLoaded = useSelector((state) => state.LoadSlice.dataLoaded);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          {!isDataLoaded && (
            <div className="valarok_intro">
              <ValarokIntro />
            </div>
          )}
          <div className={!isDataLoaded ? "d-none" : "d-block"}>
            <Header />
          </div>
          <div className={!isDataLoaded ? "d-none" : "d-block"} id="body_app">
            <Routes>
              <Route>
                <Route index element={<Home />} />
                <Route path="/story" element={<Story />} />
                <Route path="/mint" element={<Mint_Updated />} />
                <Route path="/atrium" element={<Atrium />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/utilities" element={<Utilities />} />
                <Route path="/toggle" element={<Toggle />} />
                <Route path="/terms" element={<Terms />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
        <div className={!isDataLoaded ? "d-none" : "d-block"}>
          {os === "iOS" ? <MusicPlayerIos /> : <MusicPlayer />}
        </div>
      </div>
    </>
  );
}

export default App;
