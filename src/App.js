import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import Summary from "./Screens/Summary/Summary";
import StoreFront from "./Screens/StoreFront";
import { makeStyles } from '@material-ui/core';

import {isMobile} from 'react-device-detect';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      background: ' #FF0F00 ',
      border: 0,
      borderRadius: 3,
      width: isMobile ? "100%" : "40%" 

    }
  })


function App() {
  const classes = useStyles()
  return (
    <div className="container">
      <div className={classes.root}>
      <Redirect to="/" from="/landing" />
      <Route path="/" component={Landing} />
      <Route path="/success" component={Summary} />
      </div>
       
    </div>
  );
}

export default withRouter(App);
