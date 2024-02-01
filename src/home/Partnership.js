import React from "react";
import Rive from 'rive-react';

function Partnership({setRiveLoaded}) {

    // const [i, setI] = useState("")
    const handleClick = () => {
        window.open("https://www.cryptoversosrl.it/ ");
    };
    return (

        <div className="partnership">
            <center>
                <img src="assets/images/partnershiptitle.webp" id="partnertitle" alt="partnershiptitle" />

                <div className="partnership_child">

                    <div className="partnership_child1">
                        {[...Array(4)].map((index) =>
                            <div key={index} className="partnership_child_div">
                                <Rive src='/RPM_New.riv' artboard="Locked Partnerships" stateMachines="Partnerships SM" />
                            </div>
                        )}
                    </div>
                    <div className="partnership_child1" >
                        {[...Array(4)].map((index) =>
                            <div key={index} className="partnership_child_div">
                                <Rive src='/RPM_New.riv' artboard="Locked Partnerships" stateMachines="Partnerships SM"/>
                            </div>
                        )}
                    </div>
                </div>

                <img src="assets/images/Charity Title.webp" id="charitytitle" alt="charitytitle" />
                <div className="partnership_child">
                    <div className="partnership_child1">
                        {[...Array(3)].map((index) =>
                            <div key={index} className="partnership_child_div">
                                <Rive src='/RPM_New.riv' artboard="Locked Partnerships" stateMachines="Partnerships SM" onLoadedData={()=>{setRiveLoaded(true)}}/>
                            </div>
                        )}
                    </div>
                </div>
            </center>
        </div>

    )
}
export default Partnership;
