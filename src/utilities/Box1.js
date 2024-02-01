import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import cocoa from "./rivefiles/Utilities_Page.riv";

function Box1({setBox1Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: cocoa,
        autoplay: true,
        artboard: "Cocoa",
        stateMachines: "Scrolling Text",
        // onLoad:setBox1Loaded(true)
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox1Loaded(true)
        }
    }, [canvas, rive]);
    return (
        <div className="utils-box" id="cocoa_title_div">
            <RiveComponent id="cocoa_title"/>
            {riveLoaded && (
                <div className="cocoa_title_text">
                    <div className="Cocoa_1">COCOA</div>
                    <p>
                        Cocoa is the pulsating heart of Valarok, serving as the main project token and authentic
                        exchange currency. Acquisition is reserved for NFT Keepers of the Melian, Sabrian, and Rangark
                        races through staking on our website. Earn up to 3 Cocoa per day for each NFT for the next 10
                        years, opening the doors to a world of possibilities!
                    </p>
                </div>
            )}
        </div>
    );
}

export default Box1;
