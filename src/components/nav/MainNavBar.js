import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import React from "react";
import PropTypes from 'prop-types';

const MainNavBar = ({ currentUser, wallet, nearConfig, contract}) => {
	const signIn = () => {
		wallet.requestSignIn(
		  {contractId: nearConfig.contractName, methodNames: [contract.addMessage.name]}, //contract requesting access
		  'Media Matrix Library', //optional name
		  null, //optional URL to redirect to if the sign in was successful
		  null //optional URL to redirect to if the sign in was NOT successful
		);
	  };
	
	  const signOut = () => {
		wallet.signOut();
		window.location.replace(window.location.origin + window.location.pathname);
	  };
	
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="/">
					Media Matrix | NFT Library
				</Navbar.Brand>
				<Navbar.Toggle />
				{/* links to routes */}
				<Nav.Link href="/nfts">NFTS</Nav.Link>
				<Nav.Link href="/artists">Artists</Nav.Link>
				<Nav.Link href="/create">Create</Nav.Link>
				<Nav.Link href="https://docs.ipfs.io/install/">Install IPFS</Nav.Link>
				{ currentUser
					? <button onClick={signOut}>Log out</button>
					: <button onClick={signIn}>Log in</button>
				}
			</Container>
		</Navbar>
	);
};

MainNavBar.propTypes = {
	contract: PropTypes.shape({
		addMessage: PropTypes.func.isRequired,
		getMessages: PropTypes.func.isRequired
	}).isRequired,
	currentUser: PropTypes.shape({
		accountId: PropTypes.string.isRequired,
		balance: PropTypes.string.isRequired
	}),
	nearConfig: PropTypes.shape({
		contractName: PropTypes.string.isRequired
	}).isRequired,
	wallet: PropTypes.shape({
		requestSignIn: PropTypes.func.isRequired,
		signOut: PropTypes.func.isRequired
	}).isRequired
};

export default MainNavBar;
