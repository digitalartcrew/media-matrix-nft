
import React from "react";
import CreateNftPage from "./components/CreateNftPage";
import NftPage from "./components/NftPage";
import NftsPage from "./components/NftsPage";
import ArtistPage from "./components/ArtistPage";
import ArtistsPage from "./components/ArtistsPage";
import HomePage from "./components/HomePage";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavBar from "./components/nav/MainNavBar";

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  return (
    <Router>
      <Container className="App">
        <MainNavBar />
        <Switch>
          <Route path="/nfts" component={NftsPage} />
          <Route path="/nft/:nftId" component={NftPage} />
          <Route path="/artists/" component={ArtistsPage} />
          <Route path="/artists/:artistId" component={ArtistPage} />
          <Route path="/create" component={CreateNftPage} />
          <Route exact strict path="/" component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
