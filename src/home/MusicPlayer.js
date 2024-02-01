import { useRive, useStateMachineInput } from "rive-react";
import { useState } from "react";

const audio = new Audio("/assets/soundtrack.mp3");
audio.loop = true;

export default function MusicPlayer() {
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const { rive, RiveComponent, canvas } = useRive({
    src: "RPM_New.riv",
    autoplay: true,
    artboard: "Music Player",
    stateMachines: "Music Player SM",
    onStateChange: (event) => {
      if (event.data[0] === "Play" && audio) {
        console.log("Audio is playing")
        audio.play();
      } else if (event.data[0] === "Pause" && audio) {
        audio.pause();
      }
    },
  });

  const levelInput = useStateMachineInput(
    rive,
    "Music Player SM",
    "Volume animation"
  );
  let sound_level = levelInput?.value / 100;
  if (!isNaN(sound_level)) {
    if (sound_level < 0) {
      sound_level = 0.0;
    }
    if (sound_level >= 1) {
      sound_level = 1.0;
    }

    audio.volume = parseFloat(sound_level.toString()).toFixed(1);
  }


  const handleMouseDown = (e) => {
    setInitialX(e.clientX - currentX);
    setInitialY(e.clientY - currentY);
    setIsDragging(true);
  };
  const handleMouseUp = (e) => {
    setIsDragging(false);
    let left = e.clientX - initialX;
    if (left >= window.innerWidth / 2) {
      left = window.innerWidth - 200;
    } else if (left < window.innerWidth / 2) {
      left = 0;
    }
    setCurrentX(left);
  };
  const handleMouseMove = (e) => {
    var rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (window.innerWidth > 1500) {
      if (x >= 72 && x <= 176 && y >= 82 && y <= 169) {
        canvas.style.cursor = "pointer";
        if (isDragging) {
          let left = e.clientX - initialX;
          let top = e.clientY - initialY;
          setCurrentX(left);
          setCurrentY(top);
        }
      } else canvas.style.cursor = "default";
    } else if (window.innerWidth > 858 && window.innerWidth < 1500) {
      if (x >= 56 && x <= 140 && y >= 66 && y <= 133) {
        canvas.style.cursor = "pointer";
        if (isDragging) {
          let left = e.clientX - initialX;
          let top = e.clientY - initialY;
          setCurrentX(left);
          setCurrentY(top);
        }
      } else canvas.style.cursor = "default";
    }
  };

  try {
      return (
        <div className="musica_div_parent">
          <div
            className="musica_div"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={
              window.innerWidth >= 858
                ? {
                    position: "relative",
                    left: currentX,
                    top: currentY + 40,
                    right: window.innerWidth - currentX - 20,
                  }
                : {
                    position: "fixed",
                    top:"-20px"
                  }
            }
          >
            <RiveComponent id="musica" />
          </div>
        </div>
      );
  } catch (error) {
    alert(error);
  }
}
