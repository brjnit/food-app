import {AUTH} from '../actions/actionTypes'
import cookie from '../../Auth/MyCookies';

const cookieValue = cookie.readCookie("key") 
const customerId = cookieValue ? cookieValue : ''
const initialState = {
    auth :{
        isAuthenticated : cookieValue ? true : false,
        customerId : customerId,
    }
}
const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type){
        case AUTH: {
            return {
                ...state,
                auth : {
                    ...state.usrDtls,
                    isAuthenticated : action.isAuthenticated,
                    customerId : action.customerId,
                }
            }
        }
        default: {
            return state
        }
    }
}

export default AuthenticationReducer;