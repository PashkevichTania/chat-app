import React from 'react';
import Message from "components/chat/messages/message";
import {useSelector} from "react-redux";
import {messagesSelector} from "redux/selectors";
import {MessagesContainerStyled} from "components/Styled/styledComponents";
import {nanoid} from "nanoid";
import {Container, Typography} from "@mui/material";

const MessagesContainer = () => {

  const messages = useSelector(messagesSelector);

  let messageList = null;
  if (messages.length > 0) {
    messageList = messages.map((msg) => <Message key={nanoid()} message={msg}/>);
  }

  return (
      <MessagesContainerStyled>
        {
          messageList
          ||
          <Container>
            <Typography>
              No messages yet!
            </Typography>
          </Container>
        }
      </MessagesContainerStyled>
  );
};

export default MessagesContainer;