import React from 'react';
import {IMessage} from "interfaces";
import Message from "components/chat/message";

const MessagesContainer = (props:{messages: IMessage[]}) => {


  const messageList = props.messages.map((msg)=> <Message key={JSON.stringify(msg.date)} message={msg} />)
  console.log(messageList)

  return (
      <div>
        {messageList || 'no messages yet'}
      </div>
  );
};

export default MessagesContainer;