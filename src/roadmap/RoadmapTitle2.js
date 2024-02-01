import { useRive} from "rive-react";
import { useEffect, useState } from "react";
import roadmap from "./rivefiles/RPM_New.riv";

export default function RoadmapTitle2({setRoadmapTitle2Loaded}) {
  const { rive, RiveComponent } = useRive({
    src: roadmap,
    autoplay: true,
    artboard:"Roadmap Title",
    stateMachines: "RoadmapTitle SM"
  });

  const [riveLoaded, setRiveLoaded] = useState(false)

  useEffect(() => {

    if (rive) {
      setRiveLoaded(true);
      setRoadmapTitle2Loaded(true);
    }

  }, [rive]);

  return (
    <div className="roadmap_title_div">
      <RiveComponent id="roadmap_title" />
      {riveLoaded &&
        <div className="roadmap_title_text">
          <div className="roadmap_1">ROAD MAP 2.0</div>
          <p>
            The next chapter of our journey begins! Road Map 2.0 will lead you to explore new experiences.
            Tune in for an endless adventure, where each step reveals wonders and unique opportunities in the world of Valarok.
          </p>
        </div>
      }
    </div>
  );
}
