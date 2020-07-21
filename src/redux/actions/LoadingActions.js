import {SHOW_LOADING_INDICATOR, HIDE_LOADING_INDICATOR } from "../actions/actionTypes";
export const showLoadingIndicator = () =>{
    return {
        type : SHOW_LOADING_INDICATOR,
    }
}

export const hideLoadingIndicator = () =>{
    return {
        type : HIDE_LOADING_INDICATOR,
    }
}