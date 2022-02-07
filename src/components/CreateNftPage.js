import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const CreateNftPage = ({ contract }) => {
  const [collections, setCollections] = useState([]);
  const [nft, setNft] = useState({});
  const [isCollectionFormShowing, setIsCollectionFormShowing] = useState(false);
  const [isNftFormShowing, setIsNftFormShowing] = useState(false);

  const createCollection = () => {
    return;
  };

  const createNft = () => {
    return;
  };
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   // TODO: don't just fetch once; subscribe!
  //   contract.getMessages().then(setMessages);
  // }, []);

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const { fieldset, message, donation } = e.target.elements;

  //   fieldset.disabled = true;

  //   // TODO: optimistically update page with new message,
  //   // update blockchain data in background
  //   // add uuid to each message, so we know which one is already known
  //   contract.addMessage(
  //     { text: message.value },
  //     BOATLOAD_OF_GAS,
  //     Big(donation.value || '0').times(10 ** 24).toFixed()
  //   ).then(() => {
  //     contract.getMessages().then(messages => {
  //       setMessages(messages);
  //       message.value = '';
  //       donation.value = SUGGESTED_DONATION;
  //       fieldset.disabled = false;
  //       message.focus();
  //     });
  //   });
  // };

  return (
    <div>
      <h1>Create NFT</h1>
      <Button onClick={() => setIsCollectionFormShowing(true)}>
        Create Collection
      </Button>
      <Button onClick={() => setIsNftFormShowing(true)}>Create NFT</Button>

      {isCollectionFormShowing ? (
        <div>
          <Form name="createCollection" onSubmit={createCollection}>
            <Form.Control type="text" />
            <Button>Submit</Button>
          </Form>
        </div>
      ) : null}

      {isNftFormShowing ? (
        <div>
          <Form name="createNft" onSubmit={createNft}>
            <Form.Control type="text" />
            <Form.Control type="file" />
            <Button>Submit</Button>
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default CreateNftPage;
