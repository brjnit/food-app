import {VERIFY_NUMBER} from '../actions/actionTypes'
import {storeData} from '../../util'
import {USER_KEY} from '../../config'
import APIRequest from "../../network/APIRequest/APIRequest";

export const verifyNumber = ( mobNum) =>{
    return (dispatch)=>{
        let apiRequest = new APIRequest()
        let inputParam = {"mobile" : mobNum};
        apiRequest.callAPI("sendOTP", inputParam).then((response) =>{
            console.log("[RegistrationAction.js] response", response)
            if(response.status == 200){
                dispatch(verifyNumberResult(mobNum))
            }
        });    
    }  
}

export const verifyNumberResult = (mobNum) => {
    return {
        type: VERIFY_NUMBER,
        mobNum : mobNum
    }
}

export const verifyOTP = (mobNum, OTP) =>{
    return (dispatch)=>{
        let apiRequest = new APIRequest()
        let inputParam = {"mobile" : mobNum, "otp": OTP, "userType" : "consumer"};
        apiRequest.callAPI("verifyOTP", inputParam).then((response) =>{
            console.log("[RegistrationAction.js] response verifyOTP", response)
            if(response.status == 200){
                response = response.data
                if (response.isNewUser) {
                   // pushScreen('mainApp', 'dailyget.registrationCustDetails');
                } else {
                    const customerId = response.id
                    //dispatch(getCustomerDetails(customerId));
                    // const customerId = response.id;
                    // storeData(USER_KEY, customerId.toString()).then((data) =>{
                       
                    // })
                }
            }
        });   
    }  
}

export const verifyOTPResult = (mobNum) => {
    return {
        type: VERIFY_NUMBER,
        mobNum : mobNum
    }
}
