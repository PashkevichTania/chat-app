import React from 'react';
import {IMessage} from "interfaces";
import {AvatarStyled, MessageStyled} from "components/Styled/styledComponents";
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";


const Message = (props: { message: IMessage }) => {

  const {message} = props;
  const user = useSelector(userSelector);
  const myMsg = (message.user.uid === user.uid);


  return (
      <MessageStyled myMsg={myMsg}>
        <AvatarStyled size={"50px"} src={user.photoURL} alt="user avatar"/>
        <div className={"userName"}>
          {message.user.displayName}
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