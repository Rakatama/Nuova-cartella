import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import olympics from "./rivefiles/Utilities_Page.riv";

function Box10({setBox10Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: olympics,
        autoplay: true,
        artboard: "Olympics",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox10Loaded(true)
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="summon_title_div">
            <RiveComponent id="olympics_title"/>
            {riveLoaded && (
                <div className="summon_title_text">
                    <div className="Cocoa_1">TOURNAMENTS</div>
                    <p>Participate in the tournaments, contests, and competitions of Valarok. NFT owners can compete for
                        rich prizes. Climb the ranks, perfect your strategies, and emerge as the undisputed champion of
                        Valarok!</p>
                </div>
            )}
        </div>
    );
}

export default Box10;
