import React, {useEffect, useState} from "react";
import MelianMilestone from "../roadmap/MelianMilestone";
import SabrianMilestone from "../roadmap/SabrianMilestone";
import RoadmapTitle from "../roadmap/RoadmapTitle";
import RangarkMilestone from "../roadmap/RangarkMilestone";
import RoadmapTitle2 from "../roadmap/RoadmapTitle2";
import Roadmap2Milestones from "../roadmap/Roadmap2Milestones";
import {useDispatch} from "react-redux";
import {setDataLoaded} from "../store/loadSlice";

export default function Roadmap() {

    const [roadmapTitleLoaded, setRoadmapTitleLoaded] = useState(false)
    const [melianMilestoneLoaded, setMelianMilestoneLoaded] = useState(false)
    const [sabrianMilestoneLoaded, setSabrianMilestoneLoaded] = useState(false)
    const [rangarkMilestoneLoaded, setRangarkMilestoneLoaded] = useState(false)
    const [roadmapTitle2Loaded, setRoadmapTitle2Loaded] = useState(false)
    const [roadmap2MilestonesLoaded, setRoadmap2MilestonesLoaded] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDataLoaded(false))
    }, [])
    useEffect(() => {
        if (roadmapTitleLoaded && melianMilestoneLoaded && sabrianMilestoneLoaded && rangarkMilestoneLoaded && roadmapTitle2Loaded && roadmap2MilestonesLoaded) {
            setTimeout(() => {
                dispatch(setDataLoaded(true))
            }, 3000);
        }
    }, [roadmapTitleLoaded, melianMilestoneLoaded, sabrianMilestoneLoaded, rangarkMilestoneLoaded, roadmapTitle2Loaded, roadmap2MilestonesLoaded])

    return (
        <div className="roadmap">
            <div className="roadmap-img">
                <RoadmapTitle setRoadmapTitleLoaded={setRoadmapTitleLoaded}/>
                <MelianMilestone setMelianMilestoneLoaded={setMelianMilestoneLoaded}/>
                <SabrianMilestone setSabrianMilestoneLoaded={setSabrianMilestoneLoaded}/>
                <RangarkMilestone setRangarkMilestoneLoaded={setRangarkMilestoneLoaded}/>
                <RoadmapTitle2 setRoadmapTitle2Loaded={setRoadmapTitle2Loaded}/>
                <Roadmap2Milestones setRoadmap2MilestonesLoaded={setRoadmap2MilestonesLoaded}/>
            </div>
        </div>
    );
}
