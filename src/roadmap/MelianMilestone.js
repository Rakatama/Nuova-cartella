import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import race_milestone from "./rivefiles/RPM_New.riv";
import other_milestones from "./rivefiles/RPM_New.riv";

export default function MelianMilestone({setMelianMilestoneLoaded}) {
    const {
        rive: rive1,
        RiveComponent: RiveComponent1,
    } = useRive({
        src: race_milestone,
        autoplay: true,
        artboard: "Milestone Race Sale",
        stateMachines: "Milestone Race Sale SM",
    });
    const {
        rive: rive2,
        RiveComponent: RiveComponent2,
    } = useRive({
        src: other_milestones,
        autoplay: true,
        artboard: "Other Milestones",
        stateMachines: "Other Milestones SM",
    });
    const {
        rive: rive3,
        RiveComponent: RiveComponent3,
    } = useRive({
        src: other_milestones,
        autoplay: true,
        artboard: "Other Milestones",
        stateMachines: "Other Milestones SM",
    });

    const [riveLoaded1, setRiveLoaded1] = useState(false);
    const [riveLoaded2, setRiveLoaded2] = useState(false);
    const [riveLoaded3, setRiveLoaded3] = useState(false);

    useEffect(() => {
        if (rive1) {
            setRiveLoaded1(true);
        }
        if (rive2) {
            setRiveLoaded2(true);
        }
        if (rive3) {
            setRiveLoaded3(true);
        }
        if (rive1 && rive2 && rive3) {
            setMelianMilestoneLoaded(true);
        }
    }, [rive1, rive2, rive3]);

    return (
        <div className="roadmap_melian_div">
            <div className="roadmap_melian_div_child">
                <RiveComponent1/>
                {riveLoaded1 && (
                    <div className="melian_text">
                        <div className="melian_text_title">MELIAN</div>
                        <p>
                            {" "}
                            Melian's maiden expedition initiates Valarok's epic tale.
                            Don't miss the chance to own one of the 4888 Melian NFTs, resolute creatures leading you to
                            profound knowledge.
                        </p>
                        <div className="melian_row">
                            <div className="melian_child_Presale">Presale</div>
                            <div className="melian_child_Ruffle">Raffle</div>
                            <div className="melian_child_public">Public Sale</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="roadmap_melian_div_child">
                <RiveComponent2/>
                {riveLoaded2 && (
                    <div className="melian_child_text">
                        <div className="melian_child_text_title">COCOA</div>
                        <p>
                            Acquire Cocoa, Valarok's beating heart and project's main token, opening doors to infinite
                            possibilities.
                        </p>
                    </div>
                )}
            </div>
            <div className="roadmap_melian_div_child">
                <RiveComponent3/>
                {riveLoaded3 && (
                    <div className="melian_child_text_2">
                        <div className="melian_child_text_title_2">OCEAN CLEANUP</div>
                        <p>
                            It's time to care for our oceans! Melian sales will donate to OCEANA for ocean cleanup. Join
                            the movement for ocean conservation and make a difference!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
