import React from 'react';
import {IMessage} from "interfaces";
import {MessageStyled} from "components/Styled/styledComponents";
import Socket from "services/socket/socket";

const Message = (props: { message: IMessage }) => {

  const {message} = props;
  const myMsg = (message.socketID === Socket.socket.id)


  return (
      <MessageStyled myMsg={myMsg}>
        <div className={"userName"}>
          {message.user.firstName} {message.user.lastName}
        </div>
        <div className={"text"}>
          {message.text}
        </div>
        <div className={"date"}>
          {message.date}
        </div>
      </MessageStyled>
  );
};

export default Message;