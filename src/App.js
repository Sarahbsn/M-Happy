import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginFeatures from "./components/LoginFeatures";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={WelcomePage} />
					<Route exact path="/authentification" component={LoginFeatures} />
				</Switch>
			</Router>
		</div>
	);
}

