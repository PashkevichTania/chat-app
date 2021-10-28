import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import LogIn from "components/auth/LogIn";
import SignUp from "components/auth/SignUp";

const Auth = () => {
  return (
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={12} textAlign={"center"}>
            <Typography variant="h3" component="h2">Authentication</Typography>
            <Typography sx={{mt: '1rem'}}>Before using this app, please log in or sign up :)</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <LogIn />
          </Grid>
          <Grid item xs={12} md={6}>
            <SignUp />
          </Grid>
        </Grid>
      </Container>
  );
};

export default Auth;
