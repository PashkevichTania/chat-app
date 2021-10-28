import React from 'react';
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import Socket from "services/socket/socket";
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";


const Home = () => {

  const user = useSelector(userSelector)

  const createChatHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      chatName: { value: string };
    };
    Socket.createRoom(target.chatName.value, user);
  }

  const connectToChatHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      chatID: { value: string };
    };
    Socket.joinRoom(target.chatID.value, user);
  }

  const sendMessageHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const currentDate = new Date();

    const target = event.target as typeof event.target & {
      text: { value: string };
    };
    Socket.sendMessage(user, target.text.value, currentDate)
  }

  return (
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={12} textAlign={"center"}>
            <Typography variant="h3" component="h2">Connect</Typography>
            <Typography sx={{mt: '1rem'}}>conet or create room</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={createChatHandler}>
              <TextField
                  required
                  margin="dense"
                  id="chatName"
                  name="chatName"
                  label="Chat name"
                  type="text"
                  fullWidth
                  variant="standard"
              />
              <Button type={"submit"}>Create</Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={connectToChatHandler}>
              <TextField
                  required
                  margin="dense"
                  id="chatID"
                  name="chatID"
                  label="Chat ID"
                  type="text"
                  fullWidth
                  variant="standard"
              />
              <Button type={"submit"}>Connect</Button>
            </form>
          </Grid>
        </Grid>
          <form onSubmit={sendMessageHandler}>
            <TextField
                required
                margin="dense"
                id="text"
                name="text"
                label="text"
                type="text"
                fullWidth
                variant="standard"
            />
            <Button type={"submit"}>send</Button>
          </form>
      </Container>
  );
};

export default Home;