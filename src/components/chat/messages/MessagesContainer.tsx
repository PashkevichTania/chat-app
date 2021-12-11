import React, {useEffect, useRef} from 'react';
import Message from "components/chat/messages/message";
import {useSelector} from "react-redux";
import {messagesSelector} from "redux/selectors";
import {MessagesContainerStyled} from "components/Styled/styledComponents";
import {nanoid} from "nanoid";
import {Container, Typography} from "@mui/material";

const MessagesContainer = () => {

  const messages = useSelector(messagesSelector);
  const endOfBoxRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    scrollToBottom()
  })

  let messageList = null;
  if (messages.length > 0) {
    messageList = messages.map((msg) => <Message key={nanoid()} message={msg}/>);
  }

  const scrollToBottom = () => {
    endOfBoxRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <div style={{ float:"left", clear: "both", width:'1px', height:"1px" }}
             ref={endOfBoxRef}>
        </div>
      </MessagesContainerStyled>
  );
};

export default MessagesContainer;