import React from 'react';
import {Box, IconButton, TextField} from "@mui/material";
import {IMessage} from "interfaces";
import Socket from "services/socket/socket";
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";
import SendIcon from '@mui/icons-material/Send';

const SendMessageInput = () => {


  const user = useSelector(userSelector);

  const sendMessageHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const currentDate = new Date();

    const target = event.target as typeof event.target & {
      text: { value: string };
    };

    const message: IMessage = {
      socketID: Socket.socket.id,
      user: user,
      text: target.text.value,
      date: currentDate.toLocaleString(
          'en-GB',
          {hour: "numeric", minute: "numeric", month: "long", day: "numeric"}
      ),
    }
    Socket.sendMessage(message);
  }

  return (
      <Box>
        <form onSubmit={sendMessageHandler}>
          <TextField
              required
              margin="dense"
              id="text"
              name="text"
              type="text"
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment:
                    <IconButton color={"primary"} type={"submit"}>
                      <SendIcon/>
                    </IconButton>
              }}
          />
        </form>
      </Box>
  );
};

export default SendMessageInput;