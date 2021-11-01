import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {authSelector} from "redux/selectors";
import UserInfo from "components/header/UserInfo";

const Header = () => {

  const isAuth = useSelector(authSelector);


  return (
      <AppBar position="relative" sx={{mb: 10}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Typography variant="h6" color="inherit" noWrap component={"h1"}>
            Tanyagram from 2000s
          </Typography>
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