import React from 'react';
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";
import {AvatarStyled} from "components/Styled/styledComponents";
import {Button, Grid, Typography} from "@mui/material";
import {firebaseLogOut} from "services/firebase";

const UserInfo = () => {

  const user = useSelector(userSelector);
  const logOutHandler = () => {
    firebaseLogOut();
  }

  return (
      <Grid container maxWidth={"200px"} sx={{mr:4}}>
        <Grid item xs={12} md={4}>
          <AvatarStyled size={"50px"} src={user.photoURL} alt="user avatar"/>
        </Grid>
        <Grid item xs={12} md={8} sx={{display: "flex", flexDirection: "column"}}>
          <Typography textAlign={"center"}>{user.displayName}</Typography>
          <Button onClick={logOutHandler}
                  variant={"outlined"}
                  color={"error"}
          >LogOut</Button>
        </Grid>

      </Grid>
  );
};

export default UserInfo;