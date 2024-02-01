import {useRive} from "rive-react";
import {useEffect, useState} from "react";
import race_milestone from "./rivefiles/RPM_New.riv";
import other_milestones from "./rivefiles/RPM_New.riv";

export default function SabrianMilestone({setSabrianMilestoneLoaded}) {
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
            setSabrianMilestoneLoaded(true);
        }
    }, [rive1, rive2, rive3]);

    return (
        <div className="roadmap_sabrian_div">
            <div className="roadmap_sabrian_div_child">
                <RiveComponent1/>
                {riveLoaded1 && (
                    <div className="melian_text">
                        <div className="melian_text_title">SABRIAN</div>
                        <p>
                            Sabrian's second expedition delves into Valarok's spirituality. Seize the opportunity to own
                            one of the 4888 Sabrian NFTs, instinctive creatures deeply connected to the environment.
                        </p>
                        <div className="melian_row">
                            <div className="melian_child_Presale">Presale</div>
                            <div className="melian_child_Ruffle">Raffle</div>
                            <div className="melian_child_public">Public Sale</div>
                        </div>
                    </div>
                )}
            </div>

            <div className="roadmap_sabrian_div_child">
                <RiveComponent2/>
                {riveLoaded2 && (
                    <div className="melian_child_text_2">
                        <div className="melian_child_text_title_2">BATTLE FOR ETHARK</div>
                        <p>
                            Dive into the strategic game "The Battle for Ethark," initially a physical board game
                            evolving into a digital experience. A deep and competitive game promising great
                            replayability.
                        </p>
                    </div>
                )}
            </div>

            <div className="roadmap_sabrian_div_child">
                <RiveComponent3/>
                {riveLoaded3 && (
                    <div className="melian_child_text_2">
                        <div className="melian_child_text_title_2">HELP NATURE</div>
                        <p>
                            Join the mission to save nature. We make a concrete contribution
                            to the earth by planting new trees and regenerating our
                            ecosystems. With the purchase of a Sabrian you will also have the
                            satisfaction of knowing that part of the proceeds will be donated
                            to this wonderful initiative. Join the fight for a green and
                            thriving future!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
