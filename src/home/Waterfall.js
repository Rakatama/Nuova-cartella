import React from "react";
import { getMobileOperatingSystem } from "./Device";

function Waterfall({ setVideoLoaded }) {
  let os = getMobileOperatingSystem();

  const videoLoaded = () => {
    setTimeout(() => {
      setVideoLoaded(true);
    }, 1500);
  };
  return (
    <section className="waterfall">
      <video
        id="waterfall-video"
        controls={false}
        autoPlay
        loop
        muted
        playsInline
        poster="assets\images\Waterfall.webp"
        onLoadedData={() => videoLoaded()}
      >
        {os === "iOS" ? (
          <source src="assets/waterfall.mp4" type="video/mp4" />
        ) : (
          <source src="assets/waterfall.webm" type="video/webm" />
        )}
      </video>
    </section>
  );
}

export default Waterfall;
