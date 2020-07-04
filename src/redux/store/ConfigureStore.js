import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import LandingReducer from '../reducer/LandingReducer';
import SummaryReducer from '../reducer/SummaryReducer';
import PartnersReducer from '../reducer/PartnersReducer';


const rootReducer = combineReducers({
    partners : PartnersReducer,
    landing : LandingReducer,
    summary: SummaryReducer
});

let composeEnhancers = compose;

/* if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} */

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

const store = configureStore()

export default store;