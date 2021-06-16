import React from "react";
import Home1 from "../../img/home1.png";

import { Container, Description, Image, Hide } from "../../Styles.js";

export default function About() {
	return (
		<Container>
			<Description>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span> come
						</h2>
					</Hide>
					<Hide>
						<h2>true</h2>
					</Hide>
				</div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={Home1} alt="Guy with the camera" />
			</Image>
		</Container>
	);
}
