import React from 'react';
import MessagesContainer from "components/chat/MessagesContainer";
import {IMessage} from "interfaces";

const Chat = () => {

  let date = new Date()
  let mes:IMessage = {
    user: {
      firstName: 'string',
      lastName: 'string',
      email: 'string',
    },
    text: 'text example',
    date: date,
  }

  let m:IMessage[] = []

  return (
      <div>
        <p>CHAT</p>
        <MessagesContainer messages={[mes]} />
      </div>
  );
};

export default Chat;