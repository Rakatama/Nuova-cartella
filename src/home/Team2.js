import React from "react";

function Team2() {
	const handleClick = () => {
        window.open("https://twitter.com/Taverto_?s=20/");
    };
	return (
		<div className="col-sm-6 col-lg-4 col-xl-4">
			<div className="single-person">
				<div className="person-image">
					<img src="assets/images/Team Plate Alberto.webp" alt="" />
					<center>
						<div className="team-icons">
							<button onClick={handleClick} className="-links"><span>link</span></button>
						</div>
					</center>
				</div>
				<div className="person-info">
				</div>
			</div>
		</div>
	)
}

export default Team2;