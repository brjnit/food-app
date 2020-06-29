import { GET } from "./MethodType";

const apiList = {
    getPartnerOfferings : {
        path : "/partnerOffering/$partnerId?partnerOfferingType=ALL",
        method : GET,
        params : ["partnerId"]
    },
    
    getPartnerDetails : {
        path : "/partner/$partnerId?",
        method : GET,
        params : ["partnerId"]
    }
}

export const getAPITemplate = (apiName) =>{
    return apiList[apiName];
}
