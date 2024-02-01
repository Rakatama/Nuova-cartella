import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { setDataLoaded } from "../store/loadSlice";
import HomeHeader from '../home/HomeHeader';
import Waterfall from "../home/Waterfall";
import Team from '../home/Team'
import Partnership from '../home/Partnership';
import Footer from '../home/Footer';



function Home (){
	const [videoLoaded, setVideoLoaded] = useState(false)
	const [riveLoaded, setRiveLoaded] = useState(false)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(setDataLoaded(false))
	  }, [])
	useEffect(() => {
		if(videoLoaded) {
			setTimeout(() => {
				dispatch(setDataLoaded(true))
			}, 3000);
		}
		if(window.innerWidth<=768){
			setTimeout(() => {
				dispatch(setDataLoaded(true))
			}, 3000);
		}
	}, [videoLoaded])
	
        return(
            <div>	 
          		<HomeHeader />

          		<Waterfall setVideoLoaded={setVideoLoaded} />
		  
          		<Team />

          		<Partnership setRiveLoaded={setRiveLoaded}/>

          		<Footer />
            
			</div>
        )
    }
export default Home;