import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "components/auth/Auth";
import {Container, createTheme, ThemeProvider, Typography} from "@mui/material";
import Header from "components/header/Header";
import Home from "components/home/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocketEventsListener from "services/socket/SocketEventsListener";
import Chat from "components/chat/Chat";
import Socket from "services/socket/socket";


function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#44D62C',
      },
      secondary: {
        main: '#21252B',
      },
      info: {
        main: '#2196f3',
      },
      success: {
        main: '#51FF34',
      },
      warning: {
        main: '#ff9800',
      },
      error: {
        main: '#e53935',
      },
    },
  });
  // if (Socket.socket.disconnected) {
  //   return <Typography
  //       fontSize={"xx-large"}
  //       color={"error"}
  //       sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
  //     Cannot connect to server
  //   </Typography>
  // }


  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Header/>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              <Route path="/auth" exact>
                <Auth/>
              </Route>
              <Route path="/chat" exact>
                <Chat/>
              </Route>
            </Switch>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <SocketEventsListener/>
          </Router>
        </div>
      </ThemeProvider>
  );
}

export default App;
