import React from 'react';
import {IUser} from "interfaces";
import {UserStyled} from "components/Styled/styledComponents";
import {Typography} from "@mui/material";

const User = (props: { user: IUser }) => {

  const {user} = props;
  return (
      <UserStyled>
        <Typography color={"secondary"} fontWeight={"bolder"}>{user.firstName} {user.lastName}</Typography>
        <Typography color={"secondary"}>{user.email}</Typography>
      </UserStyled>
  );
};

export default User;