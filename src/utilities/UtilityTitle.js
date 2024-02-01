import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import utilitytitle from "./rivefiles/Utilities_Page.riv";

export default function UtilityTitle({setUtilityTitleLoaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: utilitytitle,
        autoplay: true,
        artboard: "Utilities Title",
        stateMachines: "State Machine 1",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setUtilityTitleLoaded(true)
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="utility_title_div">
            <RiveComponent id="utility_title"/>
            {riveLoaded && (
                <div className="utility_title_text">
                    <div className="utility_1">UTILITIES</div>
                    <p>
                        Explore a universe of extraordinary opportunities with the incredible utilities that Valarok has
                        prepared for you.
                        Every element of the project is designed to transform your experience into an unprecedented
                        journey, inviting you to immerse yourself in a unique story, offering new possibilities and
                        resources of great value.
                    </p>
                </div>
            )}
        </div>
    );
}
