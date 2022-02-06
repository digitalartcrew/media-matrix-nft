import React, { useState, useEffect } from 'react';

const CreateNftPage = ({ contract }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      // TODO: don't just fetch once; subscribe!
      contract.getMessages().then(setMessages);
    }, []);
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      const { fieldset, message, donation } = e.target.elements;
  
      fieldset.disabled = true;
  
      // TODO: optimistically update page with new message,
      // update blockchain data in background
      // add uuid to each message, so we know which one is already known
      contract.addMessage(
        { text: message.value },
        BOATLOAD_OF_GAS,
        Big(donation.value || '0').times(10 ** 24).toFixed()
      ).then(() => {
        contract.getMessages().then(messages => {
          setMessages(messages);
          message.value = '';
          donation.value = SUGGESTED_DONATION;
          fieldset.disabled = false;
          message.focus();
        });
      });
    };

    return (
      <div>
        <h1>CreateNftPage</h1>
         { currentUser
            ? <Form onSubmit={onSubmit} currentUser={currentUser} />
            : <SignIn/>
        }
        { !!currentUser && !!messages.length && <Messages messages={messages}/> }
      </div>
    );
  };
  
  export default CreateNftPage;