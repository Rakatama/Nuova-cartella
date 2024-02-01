import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import ethark from "./rivefiles/Utilities_Page.riv";

function Box4({setBox4Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: ethark,
        autoplay: true,
        artboard: "Ethark",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox4Loaded(true)
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="ethark_title_div">
            <RiveComponent id="ethark_title"/>
            {riveLoaded && (
                <div className="ethark_title_text">
                    <div className="Cocoa_1">ETHARK</div>
                    <p>Uncover the mysterious mineral that shaped the entire existence of Valarok. Reveal its
                        extraordinary potentials and the immense value it holds. Reserved for a select few, it will be a
                        challenge for others to find their way to claim it. The hunt for Ethark is about to
                        commence!</p>
                </div>
            )}
        </div>
    );
}

export default Box4;
