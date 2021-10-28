import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";

const Header = () => {

  const history = useHistory()

  const clickHandler = () => {
    history.push('/auth')
  }

  return (
      <AppBar position="relative" sx={{mb: 10}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Typography variant="h6" color="inherit" noWrap component={"h1"}>
            Chat App
          </Typography>
          <Button color={"primary"}>pr</Button>
          <Button color={"success"}>sss</Button>
          <Button color={"secondary"}>sec</Button>
          <Button color={"info"}>info</Button>
          <Button color={"error"}>error</Button>
          <Button color={"warning"}>warning</Button>
          <Button onClick={clickHandler} variant={"outlined"}
                  sx={{fontSize: "large"}}>Auth Page</Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;