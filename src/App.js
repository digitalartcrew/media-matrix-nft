
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
        <MainNavBar contract={contract} currentUser={currentUser} nearConfig={nearConfig} wallet={wallet} />
        <Switch>
          <Route path="/nfts/:nftId" component={NftPage} />
          <Route path="/nfts" component={NftsPage} />
          <Route path="/artists/:artistId" component={ArtistPage} />
          <Route path="/artists/" component={ArtistsPage} />
          <Route path="/create" component={CreateNftPage} />
          <Route exact strict path="/" component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
};

App.propTypes = {
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

export default App;
