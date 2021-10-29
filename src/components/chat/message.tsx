import React from 'react';
import {IMessage} from "interfaces";

const Message = (props: {message: IMessage}) => {

  const {message} = props;

  return (
      <div>
        <p>{message.user.firstName} {message.user.lastName}</p>
        <p>{message.text}</p>
        <p>{JSON.stringify(message.date)}</p>
      </div>
  );
};

export default Message;