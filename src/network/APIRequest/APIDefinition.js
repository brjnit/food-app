import { GET,POST } from "./MethodType";

const apiList = {
    registerUser: {
        path : "/consumer",
        method : POST,
        params : ["name", "phoneNumber", "emailId"]
    },
    sendOTP : {
        path : "/authentication/sendOtp",
        method : POST,
        params : ["mobile"]
    },
    verifyOTP :{
        path : "/authentication/verifyOtp",
        method : POST,
        params : ["mobile", "otp", "userType"]        
    },
    getPartnerOfferings : {
        path : "/partnerOffering/$partnerId?partnerOfferingType=ALL",
        method : GET,
        params : ["partnerId"]
    },
    
    getPartnerDetails : {
        path : "/partner/$partnerId?",
        method : GET,
        params : ["partnerId"]
    },
    partnersInSameGroup : {
        path : "/partnersInSameGroup/$partnerId?",
        method : GET,
        params : ["partnerId"]
    },
    sumbitEnquiry : {
        path : "/enquiry",
        method : POST,
        params : ["customerId", "enquiryMessage", "partnerId", "channel"]
    },
}

export const getAPITemplate = (apiName) =>{
    return apiList[apiName];
}
