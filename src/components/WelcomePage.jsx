import mhappy from "../assets/mhappy.png";
import { Link } from "react-router-dom";
import {
	Logo,
	LogoContainer,
	WelcomeTitle,
	Subtitle,
	Description,
	Button,
} from "../styles/StyledWelcomePage";

export default function WelcomePage() {
	return (
		<LogoContainer>
			<WelcomeTitle>Welcome to M'Happy</WelcomeTitle>
			<Logo src={mhappy} alt="map-logo" />

			<Subtitle>Explore the cities you want from all over the world!</Subtitle>

			<Description>
				This little app is not completely finished but has been made with
				passion and a lot of motivation!
			</Description>
			<Link to="/authentification">
				<Button>Start the experience</Button>
			</Link>
		</LogoContainer>
	);
};

