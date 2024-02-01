import { useRive } from "rive-react";
import { useEffect, useState } from "react";
import race_milestone from "./rivefiles/RPM_New.riv";
import other_milestones from "./rivefiles/RPM_New.riv";

export default function Roadmap2Milestones({ setRoadmap2MilestonesLoaded }) {
  const {
    rive: rive1,
    RiveComponent: RiveComponent1,
  } = useRive({
    src: race_milestone,
    autoplay: true,
    artboard: "Other Milestones",
    stateMachines: "Other Milestones SM",
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
    autoplay: true,
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
      setRoadmap2MilestonesLoaded(true);
    }
  }, [rive1, rive2, rive3, rive4, rive5, rive6]);

  return (
    <div className="roadmap_rangark_div">
      <div className="roadmap_rangark_div_child">
        <RiveComponent1 />
        {riveLoaded1 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title">GAMES</div>
            <p>
              Additional games are in the works for Valarok.
              Various types will be added to diversify Valarok's entertainment, from casual moments with friends to competitive online challenges.
            </p>
          </div>
        )}
      </div>

      <div className="roadmap_rangark_div_child">
        <RiveComponent2 />
        {riveLoaded2 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title">TOURNAMENTS</div>
            <p>
              Valarok tournaments have arrived!
              Participate in exciting team and individual challenges to secure exclusive prizes.
              Challenges will be based on Valarok games, allowing you to compete with the best players.
              Climb the ranks and become the champion of Valarok!
            </p>
          </div>
        )}
      </div>
      <div className="roadmap_rangark_div_child">
        <RiveComponent3 />
        {riveLoaded3 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title_2">AUDIOVISUAL EXPERIENCES</div>
            <p>
              Valarok will bring visual content such as trailers, shorts, and soundtracks, featuring the finest minstrels to immerse you in this captivating world and ignite your passion for this story.
            </p>
          </div>
        )}
      </div>
      <div className="roadmap_rangark_div_child">
        <RiveComponent4 />
        {riveLoaded4 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title_2">MERCHANDISING</div>
            <p>
              Physical and digital products embodying the essence of the Valarok brand will be released.
              These products will accompany you in your daily life, reminding you that you are part of Valarok.
            </p>
          </div>
        )}
      </div>
      <div className="roadmap_rangark_div_child">
        <RiveComponent5 />
        {riveLoaded5 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title_2">VALAROK APP</div>
            <p>
              Connect with the Valarok universe through the dedicated app.
              We'll enhance the brand experience by releasing the smartphone application.
              This way, you can access services and benefits wherever you are.
            </p>
          </div>
        )}
      </div>
      <div className="roadmap_rangark_div_child">
        <RiveComponent6 />
        {riveLoaded6 && (
          <div className="melian_child_text">
            <div className="melian_child_text_title_2">VALAROK ISLAND</div>
            <p>
              Enter the digital realm of Valarok, the final step of Road Map 2.0.
              Immerse yourself in this gaming experience that will lead you to explore Valarok Island and its three races.
              NFTs, Cocoa, and Ethark will be the foundation of this experience that will let you see Valarok with your own eyes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
