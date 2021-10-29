import React from 'react';
import {IMessage} from "interfaces";
import {MessageStyled} from "components/Styled/styledComponents";

const Message = (props: { message: IMessage }) => {

  const {message} = props;



  return (
      <MessageStyled>
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