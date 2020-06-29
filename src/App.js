import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import Summary from "./Screens/Summary/Summary";

function App() {
  return (
    <div className="container">
      <Redirect to="/" from="/landing" />
      <Route path="/" component={Landing} />
      <Route path="/success" component={Summary} /> 
    </div>
  );
}

export default withRouter(App);
