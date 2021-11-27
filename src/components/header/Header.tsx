import React from 'react';

import {AppBar, Toolbar, Typography} from "@mui/material";

import {useSelector} from "react-redux";
import {authSelector} from "redux/selectors";
import UserInfo from "components/header/UserInfo";
import NavBar from "components/header/NavBar";

const Header = () => {

  const isAuth = useSelector(authSelector);


  return (
      <AppBar position="relative" sx={{mb: 10}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Typography variant="h6" color="inherit" noWrap component={"h1"}>
            Tanyagram
          </Typography>
          {isAuth ?
              <NavBar/> :
              null
          }
          {isAuth ?
              <UserInfo/> :
              <Typography variant="h6" color="inherit" noWrap>
                You are not logged in!
              </Typography>
          }
        </Toolbar>
      </AppBar>
  );
};

export default Header;
