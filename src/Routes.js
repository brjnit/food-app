import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import StoreFront from "./Screens/StoreFront/StoreFront";
import Summary from "./Screens/Summary/Summary";
import RegistrationPhoneNumber from "./Screens/RegistrationPhoneNumber/RegistrationPhoneNumber";
import Partenrs from "./Screens/Partners/Partners";
import CustmerInfo from "./Screens/CustmerInfo/CustmerInfo";
import EnquirySuccess from "./Screens/EnquirySuccess/EnquirySuccess";
import QueryString from 'query-string'
import { useDispatch, useSelector } from "react-redux";
import { getEnquiriesForCustomer } from "./redux/actions/UserEnquiryActions";
import { getPartnerDetailsByInvite } from "./redux/actions/StoreActions";
import Deeplink from "./Screens/DeepLink/Deeplink";

const Routes = ({...rest}) => {
    return (
        <QueryParamRegistration {...rest}/>
    )
}
export default withRouter(Routes)

const RouteRegistration = ({props, auth, component: Component, ...rest }) => {
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

const StoreRoute = ({ component: Component, ...rest }) => {
    const {selectedStoreOrGroup} = useSelector(state => state.partners.selectedStoreOrGroup);
    console.log("props ",rest.computedMatch.params.code)
    const inviteCode = rest.computedMatch.params.code
    const dispatch = useDispatch()

    useEffect(() => {
        if (inviteCode) {
            dispatch(getPartnerDetailsByInvite(inviteCode))
        }
    }, []);

    const routeTo = () => {
        return <Deeplink/>
        // console.log("selectedStoreOrGroup ## ",selectedStoreOrGroup)
        // if (selectedStoreOrGroup && selectedStoreOrGroup.isGroup) {
        //    return  <Redirect to="/partners" />
        // } else {
        //     return <Redirect to="/storefront" />
        // }
    }
    return (
            <Route
                {...rest}
                render={routeTo} />
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
        <StoreRoute exact path="/partner/inviteCode/:code" component={StoreFront}/>
        <Route exact path="/partners" component={Partenrs} />
        <Route exact path="/storefront" component={StoreFront} />
        <ProtectedRoute exact path="/summary" component={Summary} auth={isAuthenticated} />
    </Switch>
    )
}

const QueryParamRegistration = ({ ...rest}) => {
    const { location } = rest
    
    console.log("...location ", location)
    const params = QueryString.parse(location.search)
    const partnerId = params.q
    console.log("...params partnerId", params.q)
    if(partnerId) {
        localStorage.setItem('partnerId', params.q)
    }
    return (
        <AuthenticateRegistration {...rest } />
    )
}


