import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import athlete from "../../img/athlete-small.png";
import theracer from "../../img/theracer-small.png";
import goodtimes from "../../img/goodtimes-small.png";

const Container = styled.div`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;

	h2 {
		padding: 1rem 0rem;
	}
`;

const Movie = styled.div`
	padding-bottom: 10rem;

	.line {
		height: 0.5rem;
		background-color: #ccc;
		margin-bottom: 3rem;
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

export default function OurWork() {
	return (
		<Container>
			<Movie>
				<h2>The Athlete</h2>
				<div className="line"></div>
				<Link to="/work/the-athlete">
					<img src={athlete} alt="athelete" />
				</Link>
			</Movie>

			<Movie>
				<h2>The Racer</h2>
				<div className="line"></div>
				<Link to="/work/the-racer">
					<img src={theracer} alt="theracer" />
				</Link>
			</Movie>

			<Movie>
				<h2>Good Times</h2>
				<div className="line"></div>
				<Link to="/work/good-times">
					<img src={goodtimes} alt="goodtimes" />
				</Link>
			</Movie>
		</Container>
	);
}
