import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import lands from "./rivefiles/Utilities_Page.riv";

function Box8({setBox8Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: lands,
        autoplay: false,
        artboard: "Land",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox8Loaded(true)
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="summon_title_div">
            <RiveComponent id="land_title"/>
            {riveLoaded && (
                <div className="chronicles_title_text">
                    <div className="Cocoa_2">VALAROK CHRONICLES</div>
                    <p>Embark on a journey through the Valarok Chronicles, a captivating narrative intertwined with
                        human existence. Delve into an ancient era where characters, events, and choices transcend time,
                        offering new perspectives and possibilities. A tale that promises to keep you glued for a long
                        time, transforming your engagement into a unique literary experience.</p>
                </div>
            )}
        </div>
    );
}

export default Box8;
