import styled from "styled-components";

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background-color: black;
	color: white;
	justify-content: center;
`;

export const Logo = styled.img`
	height: 200px;
`;

export const WelcomeTitle = styled.h1`
	padding-bottom: 3rem;
	font-size: 2.5rem;
`;

export const Subtitle = styled.h2`
	padding: 3rem;
	font-size: 1.6rem;
`;

export const Description = styled.p`
	padding-bottom: 3rem;
	font-size: 1.5rem;
	font-style: oblique;
`;

export const Button = styled.button`
	width: 15rem;
	font-size: 1.3rem;
`;
