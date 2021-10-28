import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "components/auth/Auth";
import {createTheme, ThemeProvider} from "@mui/material";
import Header from "components/header/Header";
import Home from "components/home/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocketEventsListener from "services/socket/SocketEventsListener";


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
      error: {
        main: '#e53935',
      },
      success:{
        main: '#51FF34',
      },
      warning:{
        main: '#ff9800',
      },
      info:{
        main: '#2196f3',
      }
    },
  });


  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
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
            <SocketEventsListener />
          </Router>
        </div>
      </ThemeProvider>
  );
}

export default App;
