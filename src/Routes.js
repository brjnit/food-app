import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import StoreFront from "./Screens/StoreFront/StoreFront";
import Summary from "./Screens/Summary/Summary";
import RegistrationPhoneNumber from "./Screens/RegistrationPhoneNumber/RegistrationPhoneNumber";
import Partenrs from "./Screens/Partners/Partners";
import CustmerInfo from "./Screens/CustmerInfo/CustmerInfo";
import EnquirySuccess from "./Screens/EnquirySuccess/EnquirySuccess";
import AuthApi from './Auth/Auth';

const Routes = () => {
 const Auth = React.useContext(AuthApi)
    return(
       <Switch>
        <ProtectedRegistration exact path="/registration" component={RegistrationPhoneNumber} auth = {Auth.auth}/>
        <ProtectedRoute exact path="/enquirySuccess" component={EnquirySuccess} auth = {Auth.auth}/>
        <ProtectedRoute exact path="/custmerInfo" component={CustmerInfo} auth = {Auth.auth}/>
        <ProtectedRoute exact path="/partners" component={Partenrs} auth = {Auth.auth}/>
        <ProtectedRoute exact path="/partners/:id" component={StoreFront} auth = {Auth.auth}/>
        <ProtectedRoute exact path="/summary" component={Summary} auth = {Auth.auth}/>
       </Switch>
    )
}
export default Routes

const ProtectedRoute = ({auth, component: Component, ...rest}) => {

    return(
       <Route
           {...rest}
           render = {() => auth? 
            (<Component/>) : 
            (<Redirect to = "/registration"/>)}/>
    )
}

const ProtectedRegistration = ({auth, component: Component, ...rest}) => {

    return(
       <Route
           {...rest}
           render = {() => !auth? 
            (<Component/>) : 
            (<Redirect to = "/custmerInfo"/>)}/>
    )
}


