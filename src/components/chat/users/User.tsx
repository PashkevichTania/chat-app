import React from 'react';
import {IUser} from "interfaces";
import {UserStyled} from "components/Styled/styledComponents";
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {roomDataSelector, userSelector} from "redux/selectors";

const User = (props: { user: IUser }) => {
  const {user} = props;
  const room = useSelector(roomDataSelector);

  const isAdmin = room.admin.uid === user.uid;

  return (
      <UserStyled isAdmin={isAdmin}>
        {isAdmin?
            <Typography color={"secondary"} fontWeight={"bolder"}>Admin: </Typography>:
            null
        }
        <Typography color={"secondary"} fontWeight={"bolder"}>{user.displayName}</Typography>
        <Typography color={"secondary"}>{user.email}</Typography>
      </UserStyled>
  );
};

export default User;