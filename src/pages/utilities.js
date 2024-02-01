import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataLoaded } from "../store/loadSlice";

import UtilityTitle from "../utilities/UtilityTitle";
import Box1 from "../utilities/Box1";
import Box2 from "../utilities/Box2";
import Box3 from "../utilities/Box3";
import Box4 from "../utilities/Box4";
import Box5 from "../utilities/Box5";
import Box6 from "../utilities/Box6";
import Box7 from "../utilities/Box7";
import Box8 from "../utilities/Box8";
import Box9 from "../utilities/Box9";
import Box10 from "../utilities/Box10";

function Utilities() {
  const [utilityTitleLoaded, setUtilityTitleLoaded] = useState(false);
  const [box1Loaded, setBox1Loaded] = useState(false);
  const [box2Loaded, setBox2Loaded] = useState(false);
  const [box3Loaded, setBox3Loaded] = useState(false);
  const [box4Loaded, setBox4Loaded] = useState(false);
  const [box5Loaded, setBox5Loaded] = useState(false);
  const [box6Loaded, setBox6Loaded] = useState(false);
  const [box7Loaded, setBox7Loaded] = useState(false);
  const [box8Loaded, setBox8Loaded] = useState(false);
  const [box9Loaded, setBox9Loaded] = useState(false);
  const [box10Loaded, setBox10Loaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setDataLoaded(false))
  }, [])
  useEffect(() => {
    if (
      utilityTitleLoaded &&
      box1Loaded &&
      box2Loaded &&
      box3Loaded &&
      box4Loaded &&
      box5Loaded &&
      box6Loaded &&
      box7Loaded &&
      box8Loaded &&
      box9Loaded &&
      box10Loaded
    ) {
      setTimeout(() => {
				dispatch(setDataLoaded(true))
			}, 3000);
    }
  }, [
    utilityTitleLoaded,
    box1Loaded,
    box2Loaded,
    box3Loaded,
    box4Loaded,
    box5Loaded,
    box6Loaded,
    box7Loaded,
    box8Loaded,
    box9Loaded,
    box10Loaded,
  ]);

  return (
    <div>
      <div className="utilities">

        <div className="utility_child">
            <UtilityTitle setUtilityTitleLoaded={setUtilityTitleLoaded} />
            <Box2 setBox2Loaded={setBox2Loaded} />
            <Box1 setBox1Loaded={setBox1Loaded} />
            <Box7 setBox7Loaded={setBox7Loaded} />
            <Box8 setBox8Loaded={setBox8Loaded} />
            <Box3 setBox3Loaded={setBox3Loaded} />
            <Box4 setBox4Loaded={setBox4Loaded} />
            <Box10 setBox10Loaded={setBox10Loaded} />
            <Box6 setBox6Loaded={setBox6Loaded} />
            <Box9 setBox9Loaded={setBox9Loaded} />
            <Box5 setBox5Loaded={setBox5Loaded} />
        </div>
      </div>
    </div>
  );
}
export default Utilities;
