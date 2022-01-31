import "./App.css";
import AddNftPage from "./components/pages/AddNftPage";
import NftPage from "./components/pages/NftPage";
import NftsPage from "./components/pages/NftsPage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import UserProfilePage from "./components/pages/UserProfilePage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import HomePage from "./components/pages/HomePage";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavBar from "./components/nav/MainNavBar";

const App = () => {
	return (
		<Router>
			<Container className="App">
				<MainNavBar />
				<Switch>
					<Route path="/nfts" component={NftsPage} />
					<Route path="/nft/:nftId" component={NftPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignUpPage} />
					<Route path="/user-profile/:userId" component={UserProfilePage} />
					<Route path="/add-nft" component={AddNftPage} />
					<Route path="/forgot-password" component={ForgotPasswordPage} />
					<Route exact strict path="/" component={HomePage} />
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
