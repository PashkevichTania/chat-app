import React from 'react';

import MessagesContainer from "components/chat/messages/MessagesContainer";
import UsersContainer from "components/chat/users/UsersContainer";
import {Button, Container, Grid, IconButton, TextField, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {roomDataSelector} from "redux/selectors";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {toast} from "react-toastify";
import SendMessageInput from "components/chat/messages/SendMessageInput";
import Socket from "services/socket/socket";
import {useHistory} from "react-router-dom";


const Chat = () => {


  const roomData = useSelector(roomDataSelector);
  const history = useHistory();

  const notify = () => toast.success('🦄 Copied chat ID!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  const copyHandler = () => {
    const copyFieldInput: HTMLInputElement = document.getElementById('copyField') as HTMLInputElement;
    navigator.clipboard.writeText(copyFieldInput!.value);
    notify();
  };

  const exitHandler = () => {
    Socket.leaveRoom();
    history.push('/')
  }

  return (
      <Container>
        <Grid container spacing={2} sx={{mb: "40px"}}>
          <Grid item xs={12} md={4} sx={{m: "auto"}}>
            <Typography fontSize={"1.2rem"}>
              Chat name: <Typography component={"span"} color={"primary"} fontSize={"1.2rem"} fontWeight={"bold"} >{roomData.roomName}</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2} sx={{m: "auto"}}>
            <Button variant={"contained"} color={"error"} onClick={exitHandler}>Exit</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
                id="copyField"
                label="Chat ID"
                value={roomData?.id}
                variant="outlined"
                color={"primary"}
                disabled
                fullWidth
                InputProps={{
                  endAdornment:
                      <IconButton color={"primary"} onClick={copyHandler}>
                        <ContentCopyIcon/>
                      </IconButton>
                }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={9} md={9} lg={9}>
            <MessagesContainer/>
            <SendMessageInput/>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <UsersContainer/>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Chat;
