// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const MainNavBar = () => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="/">
					Media Matrix | NFT Library
				</Navbar.Brand>
				<Navbar.Toggle />
				<Nav.Link href="/nfts">NFTS</Nav.Link>
				<Nav.Link href="/login">Login</Nav.Link>
				<Nav.Link href="/signup">Sign Up</Nav.Link>
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
