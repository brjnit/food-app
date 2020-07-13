import {REGISTER_USER,PHONE_NUMBER, VERIFY_NUMBER, UPDATE_USER_DETAILS} from '../actions/actionTypes'

const initialState = {
    usrDtls :{
        phoneNumber : '9999999999',
        customerId : 1,
        isVerified: false,

    }
}
const RegistrationReducer = (state = initialState, action) => {
    console.log("usrDtls", action)
    switch (action.type){
        case REGISTER_USER: {
            return {
                ...state,
                usrDtls : {
                    ...state.usrDtls,
                    customerId : action.customerId,
                    name : action.name,
                    phoneNumber : action.phoneNumber
                }

            }
        }
        case UPDATE_USER_DETAILS: {
            return {
                ...state,
                usrDtls : {
                    ...state.usrDtls,
                    customerId : action.customerId,
                    name : action.name,
                    campus : action.campus,
                    mobNum : action.mobNum
                }
            }
        }
        case PHONE_NUMBER: {
            return {
                ...state,
                usrDtls : {
                    ...state.usrDtls,
                    phoneNumber : action.phoneNumber,
                }
            }
        }  
        case VERIFY_NUMBER: {
            return {
                ...state,
                usrDtls : {
                    ...state.usrDtls,
                    phoneNumber : action.phoneNumber,
                    isVerified : action.isVerified,
                }
            }
        }        
    }    
    return state;
}

export default RegistrationReducer