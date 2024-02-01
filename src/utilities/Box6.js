import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import trophies from "./rivefiles/Utilities_Page.riv";

function Box6({setBox6Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: trophies,
        autoplay: true,
        artboard: "Trophies",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox6Loaded(true)
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="summon_title_div">
            <RiveComponent id="trophies_title"/>
            {riveLoaded && (
                <div className="summon_title_text">
                    <div className="Cocoa_1">MERCHANDISING</div>
                    <p>Explore Valarok's merchandising. Thanks to your NFT, gain free access or enjoy special discounts
                        on a variety of products. Enhance your collection with unique pieces and limited editions,
                        obtaining products linked to the history of Valarok.</p>
                </div>
            )}
        </div>
    );
}

export default Box6;
