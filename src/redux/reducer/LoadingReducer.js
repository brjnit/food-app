import {SHOW_LOADING_INDICATOR, HIDE_LOADING_INDICATOR } from "../actions/actionTypes";

const initialState = {
    showLoader : false
}

const LoadingReducer = (state = initialState, action) => {
    switch (action.type){
        case SHOW_LOADING_INDICATOR : {
            return {
                ...state,
                showLoader : true
            }
        }
        case HIDE_LOADING_INDICATOR : {
            return {
                ...state,
                showLoader : false
            }
        }
    }
    return state;
}

export default LoadingReducer