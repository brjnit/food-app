import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import LandingReducer from '../reducer/LandingReducer';
import SummaryReducer from '../reducer/SummaryReducer';
import PartnersReducer from '../reducer/PartnersReducer';
import RegistrationReducer from '../reducer/RegistrationReducer';
import UserEnquiryReducer from '../reducer/UserEnquiryReducer';
import AuthenticationReducer from '../reducer/AutheticationReducer';
import LoadingReducer from '../reducer/LoadingReducer';


const rootReducer = combineReducers({
    loading: LoadingReducer,
    authentication: AuthenticationReducer,
    registration: RegistrationReducer,
    partners : PartnersReducer,
    landing : LandingReducer,
    summary: SummaryReducer,
    enquiry:UserEnquiryReducer
});
const middleware = applyMiddleware(thunk, logger);
let composeEnhancers = compose;

// if(__DEV__){
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// } 

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(middleware));
};

const store = configureStore()

export default store;