import APIRequest from '../../network/APIRequest/APIRequest';
import { PARTNER_OFFERINGS, PARTNER_DETAILS, ORDER} from './actionTypes';


export const getPartnerDetails = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("getPartnerDetails", { "partnerId": partnerId}).then((response) => {
            console.log("[StoreAction.js] getPartnerDetails status :: " + response)
            if (response.status == 200) {
                response = response.data;
                 dispatch(partnerDetailsResult(response));
            }
        });
    }
}

const partnerDetailsResult = (data) =>{
    return {
        type: PARTNER_DETAILS,
        partnerDetails : data
    }
}

export const getProductsList = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("getProductsList", { "partnerId": partnerId}).then((response) => {
            console.log("[StoreAction.js] getPartnerDetails status :: " + response)
            if (response.status == 200) {
                response = response.data;
                 dispatch(productListResult(response));
            }
        });
    }
}

const productListResult = (data) =>{
    return {
        type: PARTNER_DETAILS,
        productList : data
    }
}



export const getPartnerOfferings = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("getPartnerOfferings", { "partnerId": partnerId }).then((response) => {
            console.log("[storeaction.js] response partnerOfferings", response)
            if (response.status == 200) {
                response = response.data;
                dispatch(partnerOfferingsResult(response));
            }
        });
    }
}

const partnerOfferingsResult = (data) =>{
    return {
        type: PARTNER_OFFERINGS,
        result : data
    }
}

export const getOrders = (data) =>{
    return {
        type: ORDER,
        orders : data
    }
}