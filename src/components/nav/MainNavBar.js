import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import React from "react";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainNavBar = () => {
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
			

		
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <a href="#login">NFT Buyer or User</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MainNavBar;
