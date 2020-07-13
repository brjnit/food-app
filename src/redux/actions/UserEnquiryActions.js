import { GET_ALL_ENQUIRIES, SUMBIT_ENQUIRY } from '../actions/actionTypes'
import moment from 'moment'
import APIRequest from "../../network/APIRequest/APIRequest";

export const sumbitEnquiry = (customerId, partnerId, enquiryMessage) => {
    return (dispatch) => {
        let apiRequest = new APIRequest()
        let inputParam = {}
        inputParam["consumerId"] = customerId;
        inputParam["internalFields"] = enquiryMessage.trim();
        inputParam["partnerId"] = partnerId;
        inputParam["channel"] = "WEB";
        apiRequest.callAPI("sumbitEnquiry", inputParam).then((response) => {
            console.log("[StoreAction.js] response", response)
            if (response.status == 200) {
                console.log("[StoreAction.js] sumbitEnquiry response :: " + JSON.stringify(response))
                const id = response.data.id;
                dispatch(sumbitEnquiryResult({ id: id, enquiryMessage: enquiryMessage, createdAt: moment().format() }));
                // dispatch(getEnquiryList(customerId, partnerId));
                //pushScreen("enquiryFlow", "dailyget.enquiryConfirmation");
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

export const getEnquiriesForCustomer = () => {
    return (dispatch, getState) => {
        let apiRequest = new APIRequest();
        const customerId = getState().registration.usrDtls.customerId;
        let inputParam = {};
        inputParam["consumerId"] = customerId;
        apiRequest.callAPI("getEnquiriesForCustomer", inputParam).then((response) => {
            console.log("[UserAction.js] response getEnquiriesForCustomer", response)
            if (response.status == 200) {
                if (response.dataAvailable) {
                    dispatch(getEnquiryListResult(response.data));
                    const [ConsumerName, phoneNumber, campus] = response.data
                    const partnerId = "459"
                    enquiryMessage = JSON.Stringify({
                        "name": ConsumerName,
                        "phoneNumber": phoneNumber,
                        "comingFromArea": campus
                    }),
                        dispatch(sumbitEnquiry(customerId, partnerId, enquiryMessage))
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