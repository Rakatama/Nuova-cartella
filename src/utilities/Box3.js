import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import summon from "./rivefiles/Utilities_Page.riv";

function Box3({setBox3Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: summon,
        autoplay: false,
        artboard: "Summon",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox3Loaded(true);
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="ethark_title_div">
            <RiveComponent id="summon_title"/>
            {riveLoaded && (
                <div className="ethark_title_text">
                    <div className="Cocoa_1">SUMMON</div>
                    <p>Become one of the chosen few who can possess the rarest and most precious NFTs of Valarok!
                        Discover the requirements to summon the powerful Meta, limited to 100 per race, or even aspire
                        to own the Ancients, only 12 per race, legendary beings. These will grant you access to valuable
                        resources and privileges, transforming your collection into a treasure of value.</p>
                </div>
            )}
        </div>
    );
}

export default Box3;
