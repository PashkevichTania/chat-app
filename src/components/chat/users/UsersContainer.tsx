import React from 'react';
import {useSelector} from "react-redux";
import {usersInRoomSelector} from "redux/selectors";
import {nanoid} from "nanoid";
import User from "components/chat/users/User";
import {Box, Divider, Typography} from "@mui/material";

const UsersContainer = () => {

  const users = useSelector(usersInRoomSelector);

  let usersList = null;

  if (users.length > 0) {
    usersList = users.map((user) => <User key={nanoid()} user={user}/>);
  }

  return (
      <Box>
        <Typography textAlign={"center"} fontSize={"1.2rem"}>Users in chat:</Typography>
        <Divider sx={{mb:'20px'}} />
        {usersList || null}
      </Box>
  );
};

export default UsersContainer;