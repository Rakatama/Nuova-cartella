import { useRive, useStateMachineInput } from "rive-react";
import { useEffect, useState } from "react";
import race_milestone from "./rivefiles/RPM_New.riv";
import other_milestones from "./rivefiles/RPM_New.riv";

export default function RangarkMilestone({ setRangarkMilestoneLoaded }) {
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
  const {
    rive: rive4,
    RiveComponent: RiveComponent4,
  } = useRive({
    src: other_milestones,
    autoplay: true,
    artboard: "Other Milestones",
    stateMachines: "Other Milestones SM",
  });

  const {
    rive: rive5,
    RiveComponent: RiveComponent5,
  } = useRive({
    src: other_milestones,
    autoplay: true,
    artboard: "Other Milestones",
    stateMachines: "Other Milestones SM",
  });

  const {
    rive: rive6,
    RiveComponent: RiveComponent6,
  } = useRive({
    src: other_milestones,
    autoplay: false,
    artboard: "Other Milestones",
    stateMachines: "Other Milestones SM",
  });

  const [riveLoaded1, setRiveLoaded1] = useState(false);
  const [riveLoaded2, setRiveLoaded2] = useState(false);
  const [riveLoaded3, setRiveLoaded3] = useState(false);
  const [riveLoaded4, setRiveLoaded4] = useState(false);
  const [riveLoaded5, setRiveLoaded5] = useState(false);
  const [riveLoaded6, setRiveLoaded6] = useState(false);

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
    if (rive4) {
      setRiveLoaded4(true);
    }
    if (rive5) {
      setRiveLoaded5(true);
    }
    if (rive6) {
      setRiveLoaded6(true);
    }
    if (rive1 && rive2 && rive3 && rive4 && rive5 && rive6) {
      setRangarkMilestoneLoaded(true);
    }
  }, [rive1, rive2, rive3, rive4, rive5, rive6]);

  return (
    <div className="roadmap_rangark_div">
      <div className="roadmap_rangark_div_child">
        <RiveComponent1 />
        {riveLoaded1 && (
          <div className="melian_text">
            <div className="melian_text_title">RANGARK</div>
            <p>
              {" "}
              The third and final race, Rangark, brings a monumental shift to Valarok.
              Soon, understand who they are, their history, and future.
              Secure one of the 4888 Keepers Rangark, become part of the turning point!
            </p>
            <div className="melian_row">
              <div className="melian_child_Presale">Presale</div>
              <div className="melian_child_Ruffle">Raffle</div>
              <div className="melian_child_public">Public Sale</div>
            </div>
          </div>
        )}
      </div>

      <div className="roadmap_rangark_div_child">
        <RiveComponent3 />
        {riveLoaded3 && (
            <div className="melian_child_text">
              <div className="melian_child_text_title">ETHARK</div>
              <p>
                Discover Valarok's most precious token, Ethark, shaping Valarok's history.
                Learn how to obtain it and join the hunt for it.
              </p>
            </div>
        )}
      </div>

      <div className="roadmap_rangark_div_child">
        <RiveComponent2 />
        {riveLoaded2 && (
          <div className="melian_child_text_2">
            <div className="melian_child_text_title_2">ANIMAL PROTECTION</div>
            <p>
              Support the movement to save endangered species!
              Purchasing a Rangark contributes to a WWF donation protecting endangered animals.
              Be part of the solution!
            </p>
          </div>
        )}
      </div>

      <div className="roadmap_rangark_div_child">
        <RiveComponent4 />
        {riveLoaded4 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title">META</div>
            <p>
              The time of the valiant Meta has come.
              Few will summon them through discoverable requirements; they won't be for sale.
              They grant special access and privileges, becoming valuable resources.
              Only 300 Meta NFTs, 100 per race, join the elite.
            </p>
          </div>
        )}
      </div>
      <div className="roadmap_rangark_div_child">
        <RiveComponent5 />
        {riveLoaded5 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title">ANCIENTS</div>
            <p>
              Unearth legendary beings! Become one of the chosen 36, only 12 per race; discover how to summon them, not for sale.
              Obtain an Ancient and unlock their immense value and possibilities.
            </p>
          </div>
        )}
      </div>

      <div className="roadmap_rangark_div_child">
        <RiveComponent6 />
        {riveLoaded6 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title_2">CHRONICLES OF VALAROK</div>
            <p>
              Immerse yourself in Valarok's tale, a fascinating and intriguing work revealing humanity's connection to this story.
              Initially digital, later released in physical form. Don't miss this story!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
