import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import valarokapp from "./rivefiles/Utilities_Page.riv";

function Box5({setBox5Loaded}) {
    const {rive, RiveComponent, canvas} = useRive({
        src: valarokapp,
        autoplay: true,
        artboard: "Valarok App",
        stateMachines: "Scrolling Text",
    });

    const [riveLoaded, setRiveLoaded] = useState(false);

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true);
            setBox5Loaded(true)
        }
    }, [canvas, rive]);
    return (
        <div className="utils-box" id="cocoa_title_div">
            <RiveComponent id="valarok_app_title"/>
            {riveLoaded && (
                <div className="cocoa_title_text">
                    <div className="Cocoa_1">VALAROK APP</div>
                    <p>The Valarok app will be your gateway to the web3 digital world. Connect your wallet, showcase
                        your collections, share experiences with friends, create new content and opportunities wherever
                        you are, enjoying the universe of Valarok.</p>
                </div>
            )}
        </div>
    );
}

export default Box5;
