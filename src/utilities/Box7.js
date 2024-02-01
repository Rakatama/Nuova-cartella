import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import character from "./rivefiles/Utilities_Page.riv";

function Box7({setBox7Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: character,
        autoplay: true,
        artboard: "Character",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox7Loaded(true)
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="ethark_title_div">
            <RiveComponent id="character_title"/>
            {riveLoaded && (
                <div className="ethark_title_text">
                    <div className="Cocoa_1">GAMES</div>
                    <p>Immerse yourself in exciting thematic games, challenge friends and global players. Trust in
                        strategy and inventiveness to ensure victory: no luck, just your skills determining the outcome.
                        The games will be easy to learn, guaranteeing fun and replayability, preparing you for epic
                        matches without any holds barred.</p>
                </div>
            )}
        </div>
    );
}

export default Box7;
