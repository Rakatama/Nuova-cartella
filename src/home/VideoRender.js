import React from "react";
import { getMobileOperatingSystem } from "./Device";

function VideoRender({ setVideoLoaded, videoUrl }) {
  let os = getMobileOperatingSystem();
  const videoLoaded = () => {
    setTimeout(() => {
      setVideoLoaded(true);
    }, 1500);
  };
  return (
    <section>
      <video
        id="waterfall-video"
        autoPlay
        controls={false}
        loop
        muted
        playsInline
        onLoadedData={() => videoLoaded()}
      >
        {os === "iOS" ? (
          <source src={videoUrl} type="video/mp4" />
        ) : (
          <source src={videoUrl} type="video/webm" />
        )}
      </video>
    </section>
  );
}

export default VideoRender;
