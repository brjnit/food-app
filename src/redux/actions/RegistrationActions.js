import { REGISTER_USER, VERIFY_NUMBER, UPDATE_USER_DETAILS, AUTH } from '../actions/actionTypes'
import APIRequest from "../../network/APIRequest/APIRequest";
import cookie from '../../Auth/MyCookies';
import { getEnquiriesForCustomer } from './UserEnquiryActions';

export const registerUser = (name, phoneNumber, address) => {
    return (dispatch) => {
        let apiRequest = new APIRequest()
        let inputParam = {
            "name": name,
            "phoneNumber": phoneNumber,
            "campus": address
        };
        apiRequest.callAPI("registerUser", inputParam).then((response) => {
            console.log("[RegistrationAction.js] response", response.data)
            if (response.status == 200) {
                cookie.setCookie("key", response.data.id)
                //const partnerId = localStorage.getItem('partnerId')
                dispatch(registerUserResult(name, phoneNumber, response.data.id))
                // dispatch enquiry service
                dispatch(getEnquiriesForCustomer(response.data.id))
            }
        });
    }
}

export const registerUserResult = (name, phoneNumber, customerId) => {
    return {
        type: REGISTER_USER,
        name: name,
        phoneNumber: phoneNumber,
        customerId: customerId
    }
}

export const getCustomerDetails = (customerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest()
        let inputParam = { "customerId": customerId };
        apiRequest.callAPI("getCustomerDetails", inputParam).then((response) => {
            console.log("[RegistrationAction.js] response", response)
            if (response.status == 200) {
                console.log("[RegistrationAction.js] getCustomerDetails response :: " + JSON.stringify(response));
                response = response.data;
                dispatch(updateCustomerDetails(response.name, response.campus, response.phoneNumber, customerId));
                //establishConnection(customerId);
                // goToLandingScreen();
            }
        });
    }
}

export const updateCustomerDetails = (name, campus, mobNum, customerId) => {
    return {
        type: UPDATE_USER_DETAILS,
        name: name,
        campus: campus,
        customerId: customerId,
        mobNum: mobNum
    }
}

export const verifyNumber = (mobNum) => {
    return (dispatch) => {
        let apiRequest = new APIRequest()
        let inputParam = { "mobile": mobNum };
        apiRequest.callAPI("sendOTP", inputParam).then((response) => {
            console.log("[RegistrationAction.js] response", response)
            if (response.status == 200) {
                dispatch(verifyNumberResult(mobNum))
            }
        });
    }
}

export const verifyNumberResult = (mobNum) => {
    return {
        type: VERIFY_NUMBER,
        phoneNumber: mobNum
    }
}

export const verifyOTP = (mobNum, OTP) => {
    return (dispatch) => {
        let apiRequest = new APIRequest()
        let inputParam = { "mobile": mobNum, "otp": OTP, "userType": "consumer" };
        apiRequest.callAPI("verifyOTP", inputParam).then((response) => {
            console.log("[RegistrationAction.js] response verifyOTP", response)
            if (response.status == 200) {
                response = response.data
                if (response.isVerified) {
                    if (response.isNewUser) {
                        dispatch(verifyOTPResult(mobNum, response.isVerified));
                    } else {
                        dispatch(getCustomerDetails(response.id));
                    }
                }
            }
        });
    }
}

export const verifyOTPResult = (mobNum, isVerified) => {
    return {
        type: VERIFY_NUMBER,
        phoneNumber: mobNum,
        isVerified: isVerified
    }
}

export const updateAuth = (isAuthenticated, customerId) => {
    return (dispatch) => {
        dispatch(getEnquiriesForCustomer(customerId))
        return {
            type: AUTH,
            isAuthenticated : isAuthenticated,
            customerId : customerId,
        }
    }  
}

