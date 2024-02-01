import { useRive } from "rive-react";
import valarok_intro from "./rivefiles/VALAROK INTRO.riv";

export default function ValarokIntro() {
  const { rive, RiveComponent } = useRive({
    src: valarok_intro,
    autoplay: true,
    artboard: "VALAROK INTRO",
    stateMachines: "Valarok Intro",
    onStateChange:(e)=>{
      if(rive)
        rive.play(e.data)
    }
  });

  return <RiveComponent id="intro_canvas" />;
}
