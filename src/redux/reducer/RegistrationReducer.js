import {PHONE_NUMBER, VERIFY_NUMBER} from '../actions/actionTypes'

const initialState = {
    usrDtls :{
        mobNum : '9999999999',
        customerId : 1
    }
}
const RegistrationReducer = (state = initialState, action) => {
    switch (action.type){
        case PHONE_NUMBER: {
            return {
                ...state,
                usrDtls : {
                    ...state.usrDtls,
                    mobNum : action.mobNum,
                }
            }
        }  
        case VERIFY_NUMBER: {
            return {
                ...state,
                usrDtls : {
                    ...state.usrDtls,
                    mobNum : action.mobNum,
                }
            }
        }        
    }    
    return state;
}

export default RegistrationReducer