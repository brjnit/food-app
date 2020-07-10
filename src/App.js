import React from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import Summary from "./Screens/Summary/Summary";
import RegistrationPhoneNumber from "./Screens/RegistrationPhoneNumber/RegistrationPhoneNumber";
import Partenrs from "./Screens/Partners/Partners";
import CustmerInfo from "./Screens/CustmerInfo/CustmerInfo";
import { makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import Header from "./components/Header/Header";

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


function App() {
  const classes = useStyles()
  return (
    <div className="container">
        <Switch>
        <Route exact path="/custmerInfo" component={CustmerInfo} />
          <Route exact path="/registration" component={RegistrationPhoneNumber} />
          <Route exact path="/partners" component={Partenrs} />
          <Route exact path="/partners/:id" component={Landing} />
          <Route exact path="/summary" component={Summary} />
        </Switch>
    </div>
  );
}

export default withRouter(App);
