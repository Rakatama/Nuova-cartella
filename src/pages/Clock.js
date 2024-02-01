import { useState } from "react";
const Clock = () => {
	let time = new Date().toLocaleTimeString();
	const [currentTime, setCurrentTime] = useState(time);
	const updatetime = () => {
		let time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	}
	setInterval(updatetime, 1000);
    return(
        <div className="header_clock">
            <h4 className="header_clock_h4">{currentTime}</h4>
        </div>
    )
}

export default Clock;
