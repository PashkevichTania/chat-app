import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "components/auth/Auth";
import {createTheme, ThemeProvider} from "@mui/material";



function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#44D62C',
      },
      secondary: {
        main: '#212121',
      },
      error: {
        main: '#e53935',
      },
    },
  });


  return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Auth/>
            </Route>
          </Switch>
        </Router>
      </div>
      </ThemeProvider>
  );
}

export default App;
