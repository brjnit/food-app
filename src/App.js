import React from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import Summary from "./Screens/Summary/Summary";
import Partenrs from "./Screens/Partners/Partners";
import { makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // background: ' #FF0F00 ',
    border: 0,
    borderRadius: 3,
    width: isMobile ? "100%" : "60%"
  }
})


function App() {
  const classes = useStyles()
  return (
    <div className="container">
      <div className={classes.root}>
        <Switch>
          <Route exact path="/partners" component={Partenrs} />
          <Route exact path="/partners/:id" component={Landing} />
          <Route exact path="/summary" component={Summary} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
