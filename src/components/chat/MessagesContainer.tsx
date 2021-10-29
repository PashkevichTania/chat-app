import React from 'react';
import Message from "components/chat/message";
import {useSelector} from "react-redux";
import {messagesSelector} from "redux/selectors";

const MessagesContainer = () => {


  let messageList = null

  const messages = useSelector(messagesSelector)
  if (messages.length>0){
    messageList = messages.map((msg)=> <Message key={JSON.stringify(msg.date+msg.socketID)} message={msg} />)
  }

  return (
      <div>
        {messageList || 'no messages yet'}
      </div>
  );
};

export default MessagesContainer;