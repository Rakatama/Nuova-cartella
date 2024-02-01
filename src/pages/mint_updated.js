import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataLoaded } from "../store/loadSlice";
import MintPage from "../newMint/mintPage";

import "../newMint/style.css";

export default function Mint_Updated() {
  const [touchStart, setTouchStart] = useState(0);
  const [melianLoaded, setMelianLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataLoaded(false));
  }, []);

  useEffect(() => {
    if (melianLoaded) {
      setTimeout(() => {
        dispatch(setDataLoaded(true));
      }, 3000);
    }
  }, [melianLoaded]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const currentTouchY = e.targetTouches[0].clientY;
    const touchDiff = touchStart - currentTouchY;

    const intensity = Math.log(Math.abs(touchDiff) + 2);

    if (intensity > 1) {
      const scrollAmount = touchDiff * intensity;

      window.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const options = { passive: false };
    window.addEventListener("touchstart", handleTouchStart, options);
    window.addEventListener("touchmove", handleTouchMove, options);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart, options);
      window.removeEventListener("touchmove", handleTouchMove, options);
    };
  }, [touchStart]);

  return <MintPage setMelianLoaded={setMelianLoaded}></MintPage>;
}
