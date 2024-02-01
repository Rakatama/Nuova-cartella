import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import workspace from "./rivefiles/Utilities_Page.riv";

function Box9({setBox9Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: workspace,
        autoplay: true,
        artboard: "Workspace",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox9Loaded(true);
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="ethark_title_div">
            <RiveComponent id="workspace_title"/>
            {riveLoaded && (
                <div className="ethark_title_text">
                    <div className="Cocoa_1">ENTERTAINMENT</div>
                    <p>Valarok will offer engaging audiovisual experiences, enriched by evocative soundtracks and songs
                        worthy of the finest minstrels, completely enveloping you in this captivating universe. We will
                        narrate the epic story of Valarok, ensuring an unprecedented sensory and immersive
                        experience.</p>
                </div>
            )}
        </div>
    );
}

export default Box9;
