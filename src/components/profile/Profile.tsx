import {Button, CircularProgress, Container, Grid, TextField, Typography} from "@mui/material";
import {AvatarFullStyled, ErrorFormMessage} from "components/Styled/styledComponents";
import React from "react";
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";
import UpdateName from "components/profile/UpdateName";
import UpdateEmailAndPassword from "components/profile/UpdateEmailAndPassword";
import UpdateAvatar from "components/profile/UpdateAvatar";


const Profile = () => {
  const user = useSelector(userSelector);


  return (
      <Container>
        <Typography textAlign={"center"}>Update profile info</Typography>
        <Grid container sx={{mt:4}}>
          <Grid item xs={12} md={6}>
            {user.photoURL ?
                <AvatarFullStyled size={"500px"} src={user.photoURL} alt="user avatar"/> :
                <CircularProgress />
            }
            <UpdateAvatar />
          </Grid>
          <Grid item xs={12} md={6} sx={{display: "flex", flexDirection: "column"}}>
            <UpdateName />
            <UpdateEmailAndPassword />
          </Grid>
        </Grid>
      </Container>
  );
};

export default Profile;
