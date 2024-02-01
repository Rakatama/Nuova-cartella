import { useEffect, useRef, useState } from "react";
import { useRive } from "rive-react";

function MusicPlayerIos() {
  const [play, setPlay] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const { rive, RiveComponent, canvas } = useRive({
    src: "RPM_New.riv",
    autoplay: true,
    artboard: "Music Player",
    stateMachines: ["Pause"],
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (play) {
      audio.currentTime = audioCurrentTime;
      audio.play();
    } else {
      audio.pause();
      setAudioCurrentTime(audio.currentTime);
    }

    audio.addEventListener(
      "ended",
      function () {
        setAudioCurrentTime(0);
        setPlay(true);
      },
      false
    );
  }, [play, audioCurrentTime]);

  const playAudio = (e) => {
    // alert("clicked");
    var rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 32 && x <= 86 && y >= 40 && y <= 82) {
      if (!rive.isPlaying) {
        rive.play("Play");
        rive.play("Playing");
      } else {
        rive.play("Pause");
        rive.pause("Playing");
      }
    }
  };
  const togglePlay = (e) => {
    var rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 32 && x <= 86 && y >= 40 && y <= 82) {
      setPlay(!play);
    }
  };

  return (
    <div
      onClick={(e) => {
        togglePlay(e);
        playAudio(e);
      }}
    >
      <div
        style={{
          position: "fixed",
          height: "120px",
          width: "120px",
          top: "-20px",
          left:"-5px",
          zIndex:10,
        }}
      >
        <RiveComponent />
      </div>
      <audio ref={audioRef} src="/assets/soundtrack.mp3" />
    </div>
  );
}

export default MusicPlayerIos;
