import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataLoaded } from "../store/loadSlice";

import VideoRender from "../home/VideoRender";
import { getMobileOperatingSystem } from "../home/Device";
function Story() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [meteoritesLoaded, setMeteoritesLoaded] = useState(false)
  const [contactLoaded, setContactLoaded] = useState(false)
  const [conflictLoaded, setConflictLoaded] = useState(false)
  const [warLoaded, setWarLoaded] = useState(false)
  const dispatch = useDispatch()

  let os = getMobileOperatingSystem()


  useEffect(() => {
    dispatch(setDataLoaded(false));
  }, []);

  useEffect(() => {
		if(meteoritesLoaded && contactLoaded && conflictLoaded && warLoaded) {
			setTimeout(() => {
				dispatch(setDataLoaded(true))
			}, 3000);
		}
	}, [meteoritesLoaded, contactLoaded, conflictLoaded, warLoaded])


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage("assets/images/Brain_mob.webp");
      } else {
        setBackgroundImage("assets/images/brain.webp");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="story2">
        <div className="mob-story-intro">
          <img src="assets/images/Intro.webp" alt="storyintro" />
          <div className="story_text">
            <h1>
              Our story begins long before mankind appeared. When dinosaurs
              inhabited our earth, an aestroid rain fell on the planet causing
              destruction and altering the entire ecosystem.
            </h1>
          </div>
        </div>
      </section>
      <section>
      <VideoRender videoUrl={os==="iOS" ? "assets/Meteorites.mp4" : "assets/Meteorites.webm"} setVideoLoaded={setMeteoritesLoaded} />

        <div className="mob-fallen-meteor">
          <div className="extra_div"></div>
          <h1>
            It was the end for many animal species, but also the beginning of
            something new, unexpected. <br />
            <br />
            Some of these meteors released a powerful light, and exposure to
            this alien agent, Ethark, caused a genetic mutation in two different
            species.
          </h1>
        </div>

        <VideoRender videoUrl={os==="iOS" ? "assets/contact.mp4" : "assets/contact.webm"} setVideoLoaded={setContactLoaded} />

        <div className="mob-melian-text">
          <div className="extra_div"></div>
          <h1>and so Melian and Sabrian were born.</h1>
        </div>
        <img
          src="assets/images/awakening.webp"
          id="awakening"
          alt="awakening"
        />
        <div className="mob-two-races">
          <div className="extra_div"></div>
          <h1>
            The two races avanced very quickly but in different ways and this
            led them to become ever more distant.
          </h1>
        </div>
        <div className="brain-mob">
          <img src={backgroundImage} id="brain" alt="storyintro" />

          <h1>
            On the one hand, the Melians who acted under the pressure of the
            left hemisphere of the brain; rational and analytical, they had a
            predilection for the use of intellect and logic.
          </h1>
          <h2>
            On the other hand the Sabrians who developed more skills related to
            the right hemisphere such as creativity, intuitiveness and instinct.
          </h2>
        </div>
        <div className="mob-long-text">
          <div className="extra_div"></div>
          <h1>
            It didn't take long before Melian and Sabrian realized the enormous
            potential of the Ethark and this sparked a conflict between the two
            species over the control of the Ethark itself.
          </h1>
        </div>
        <VideoRender videoUrl={os === "iOS" ? "assets/conflict.mp4" : "assets/conflict.webm"} setVideoLoaded={setConflictLoaded} />

        <div className="mob-long-text-2">
          <div className="extra_div"></div>
          <h1 style={{ top: "30%" }} className="bloody_war">
            The war was bloody and lasting and caused a large number of
            casualties on both sides.
          </h1>
        </div>
        <VideoRender videoUrl={os === "iOS" ? "assets/afterwar.mp4" : "assets/afterwar.webm"} setVideoLoaded={setWarLoaded} />

      </section>
      <div className="mob-today-text">
        <div className="extra_div"></div>
        <h1>
          Eventually Melian and Sabrian were exhausted and decimated, it was at
          this point that they realized that, despite the differences between
          them, they had a common intent; to maintain a natural balance. So
          they, decided by mutual agreement to live, albeit separated, in peace
          but with the prerogative of keeping their existence and that of the
          Ethark hidden from the rest of the world.
        </h1>
      </div>
      <img
        style={{ width: "100%" }}
        src="assets/images/Melian_Between_us.webp"
        alt="story-ending-2"
      />
      <div className="mob-today-text-2">
        <div className="extra_div"></div>
        <h1>
          Even today Melian and Sabrian live hidden from mankind, whom they see
          as a possible enemy due to its destructive instincts and a soul
          corrupted by power. Some of them have perfectly camouflaged among us
          and so, hidden in full light, remain in watchful waiting...
        </h1>
      </div>
    </div>
  );
}

export default Story;
