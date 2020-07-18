import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import StoreFront from "./Screens/StoreFront/StoreFront";
import Summary from "./Screens/Summary/Summary";
import RegistrationPhoneNumber from "./Screens/RegistrationPhoneNumber/RegistrationPhoneNumber";
import Partenrs from "./Screens/Partners/Partners";
import CustmerInfo from "./Screens/CustmerInfo/CustmerInfo";
import EnquirySuccess from "./Screens/EnquirySuccess/EnquirySuccess";
import QueryString from 'query-string'
import cookie from './Auth/MyCookies';
import { useDispatch, useSelector } from "react-redux";
import { getEnquiriesForCustomer } from "./redux/actions/UserEnquiryActions";

const Routes = ({...rest}) => {
    return (
        <QueryParamRegistration {...rest}/>
    )
}
export default withRouter(Routes)

const RouteRegistration = ({ auth, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => !auth ?
                (<Component />) :
                (<Redirect to="/enquirySuccess" />)} />
    )
}

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => auth ?
                (<Component />) :
                (<Redirect to="/registration" />)} />
    )
}

const AuthenticateRegistration = ({ auth, component: Component, ...rest }) => {
    const {isAuthenticated, customerId} = useSelector(state => state.authentication.auth);
    const dispatch = useDispatch()
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getEnquiriesForCustomer(customerId))
        }
    }, []);
    
    return (
        <Switch>
            {console.log("...isAuthenticated customerId", isAuthenticated, customerId)}
        <RouteRegistration exact path="/registration" component={RegistrationPhoneNumber} auth={isAuthenticated} />
        <RouteRegistration exact path="/custmerInfo" component={CustmerInfo} auth = {isAuthenticated}/>
        <ProtectedRoute exact path="/enquirySuccess" component={EnquirySuccess} auth={isAuthenticated} />
        <ProtectedRoute exact path="/partners" component={Partenrs} auth={isAuthenticated} />
        <ProtectedRoute exact path="/partners/:id" component={StoreFront} auth={isAuthenticated} />
        <ProtectedRoute exact path="/summary" component={Summary} auth={isAuthenticated} />
    </Switch>
    )
}

const QueryParamRegistration = ({...rest }) => {
    const { location } = rest
    const params = QueryString.parse(location.search)
    console.log("...params partnerId", location.pathname)
    if(location.pathname === "/registration") {
        localStorage.setItem('partnerId', params.q)
    }
    return (
        <AuthenticateRegistration {...rest } />
    )
}


