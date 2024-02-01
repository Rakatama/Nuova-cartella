import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import customization from "./rivefiles/Utilities_Page.riv";

function Box2({setBox2Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: customization,
        autoplay: true,
        artboard: "Custumization ",
        stateMachines: "Scrolling Text",
        // onLoad:setBox2Loaded(true)
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox2Loaded(true);
        }
    }, [canvas, rive]);

    return (
        <div className="utils-box" id="customization_title_div">
            <RiveComponent id="customizaation_title"/>
            {riveLoaded && (
                <div className="customization_title_text">
                    <div className="Cocoa_1">GOLD PASS</div>
                    <p>
                        Obtain your Valarok NFT, equivalent to an exclusive lifetime gold pass, guaranteeing VIP
                        privileges.
                        Access exclusive content, events, previews, product teasers, and resources related to the
                        Valarok brand, transforming your engagement into a premium experience.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Box2;
