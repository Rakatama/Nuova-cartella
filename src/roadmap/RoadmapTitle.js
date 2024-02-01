import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import roadmap from "./rivefiles/Roadmap1Title.riv";

export default function RoadmapTitle({setRoadmapTitleLoaded}) {
    const {rive, RiveComponent} = useRive({
        src: roadmap,
        autoplay: true,
        artboard: "Roadmap Title",
        stateMachines: "RoadmapTitle SM"
    });

    const [riveLoaded, setRiveLoaded] = useState(false)

    useEffect(() => {

        if (rive) {
            setRiveLoaded(true);
            setRoadmapTitleLoaded(true)
        }

    }, [rive]);

    return (
        <div className="roadmap_title_div">
            <RiveComponent id="roadmap_title"/>
            {riveLoaded &&
                <div className="roadmap_title_text">
                    <div className="roadmap_1">ROADMAP 1.0</div>
                    <p>
                        Welcome to the captivating beginning of Valarok's journey!
                        Road Map 1.0 is an epic odyssey unveiling the three races, revealing treasures, games,
                        charitable initiatives, and the intriguing story that binds us to it.</p>
                </div>
            }
        </div>
    );
}
