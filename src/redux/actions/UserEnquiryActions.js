import { GET_ALL_ENQUIRIES, SUMBIT_ENQUIRY, AUTH } from '../actions/actionTypes'
import moment from 'moment'
import APIRequest from "../../network/APIRequest/APIRequest";

export const sumbitEnquiry = (customerId, enquiryMessage) => {
    return (dispatch) => {
        let apiRequest = new APIRequest()
        let inputParam = {}
        const partnerId = localStorage.getItem('partnerId');
        inputParam["consumerId"] = customerId;
        inputParam["internalFields"] = enquiryMessage.trim();
        inputParam["partnerId"] = partnerId;
        inputParam["channel"] = "WEB";
        console.log("[inputParam]", inputParam)
        apiRequest.callAPI("sumbitEnquiry", inputParam).then((response) => {
            console.log("sumbitEnquiry response", response)
            if (response.status == 200 ) {
                console.log("[StoreAction.js] sumbitEnquiry response :: " + JSON.stringify(response))
                const {id, enquiryMessage}= response.data;
                dispatch(sumbitEnquiryResult({ id: id, enquiryMessage: enquiryMessage, createdAt: moment().format() }));
            }
        });
    }
}

const sumbitEnquiryResult = (request) => {
    return {
        type: SUMBIT_ENQUIRY,
        newRequest: request
    }
}

export const getEnquiriesForCustomer = (customerId) => {
    return (dispatch, getState) => {
        let apiRequest = new APIRequest();
        let inputParam = {};
        inputParam["customerId"] = customerId;
        apiRequest.callAPI("getCustomerDetails", inputParam).then((response) => {
            console.log("response getEnquiriesForCustomer", response)
            if (response.status == 200) {
                if (response.dataAvailable ) {
                    const {name, phoneNumber, campus} = response.data
                    const enquiryObj = {
                        "name": name,
                        "phoneNumber": phoneNumber,
                        "comingFromArea": campus
                    }
                    const enquiryMessage = JSON.stringify(enquiryObj)
                 dispatch(sumbitEnquiry(customerId, enquiryMessage))
                 dispatch(setAuthParams(true, customerId))
                }
            }
        });
    }
}

const getEnquiryListResult = (enquiriesData) => {
    return {
        type: GET_ALL_ENQUIRIES,
        enquiries: enquiriesData
    }
}

const setAuthParams = (isAuthenticated, customerId) => {
    return {
        type: AUTH,
        isAuthenticated : isAuthenticated,
        customerId : customerId,
    }
}