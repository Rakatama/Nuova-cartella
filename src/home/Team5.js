import React from "react";

function Team5() {
	const handleClick = () => {
		window.open("https://www.linkedin.com/in/giorgiaesposito-smm/");
	};
	const handleClick1 = () => {
		window.open("https://twitter.com/espositog_?s=21&t=rGYZAGawL_jHalVdmi9dDA/");
	};
	return (
		<div className="col-sm-6 col-lg-4 col-xl-4">
			<div className="single-person">
				<div className="person-image">
					<img src="assets/images/Giorgia.webp" alt="" />
					<center>
						<div className="team-icons">
							<button onClick={handleClick1} className="social-links"><span>link</span></button>
							<button onClick={handleClick} className="social-links"><span>link</span></button>
						</div>
					</center>
				</div>
				<div className="person-info">
				</div>
			</div>
		</div>
	)
}

export default Team5;