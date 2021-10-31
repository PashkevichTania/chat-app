import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {firebaseLogOut} from "firebase";
import {useSelector} from "react-redux";
import {authSelector} from "redux/selectors";
import UserInfo from "components/header/UserInfo";

const Header = () => {

  const isAuth = useSelector(authSelector)


  const logOutHandler = () => {
    firebaseLogOut();
  }

  return (
      <AppBar position="relative" sx={{mb: 10}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Typography variant="h6" color="inherit" noWrap component={"h1"}>
            Chat App
          </Typography>
          {isAuth?
              <div>
                <UserInfo />
                <Button onClick={logOutHandler}
                        variant={"outlined"}
                        color={"error"}
                >LogOut</Button>
              </div> :
              <Typography variant="h6" color="inherit" noWrap>
                You are not logged in!
              </Typography>
          }
        </Toolbar>
      </AppBar>
  );
};

export default Header;