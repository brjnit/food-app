import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import Routes from "./Routes";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // background: ' #FF0F00 ',
    border: 0,
    borderRadius: 3,
    //width: isMobile ? "100%" : "60%"
  },
  app: {
    display: 'flex',
    background: ' #FF0F00 ',
    flexDirection: 'column',
    //width: isMobile ? "100%" : "60%",
    justifyContent: 'center',
    alignItems: 'center'
  }
})


function App(props) {
  return (
    <div className="container">
        <Router>
          <Routes />
        </Router>
    </div>
  );
}

export default App;
