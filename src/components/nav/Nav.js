import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
	min-height: 10vh;
	display: flex;
	align-items: center;
	margin: auto;
	justify-content: space-between;
	padding: 1rem 10rem;
	background-color: #282828;

	a {
		color: white;
		text-decoration: none;
		font-size: 1rem;
	}

	ul {
		display: flex;
		list-style: none;
	}

	#logo {
		font-size: 1.6rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
	}

	li {
		padding-left: 10rem;
		position: relative;
	}
`;

export default function Nav() {
	return (
		<NavContainer>
			<h1>
				<Link to="/" id="logo">
					Capture
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">1. About Us</Link>
				</li>

				<li>
					<Link to="/work">2. Our Work</Link>
				</li>

				<li>
					<Link to="/contact">3. Contact Us</Link>
				</li>
			</ul>
		</NavContainer>
	);
}
