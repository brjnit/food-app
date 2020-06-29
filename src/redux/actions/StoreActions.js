import APIRequest from '../../network/APIRequest/APIRequest';


export const getPartnerDetails = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("getPartnerDetails", { "partnerId": partnerId }).then((response) => {
            console.log("[StoreAction.js] getPartnerDetails status :: " + response)
            if (response.status == 200) {
                response = response.data;
                // dispatch(partnerOfferingsResult(response));
            }
        });
    }
}

export const partnerOfferings = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("getPartnerOfferings", { "partnerId": partnerId }).then((response) => {
            console.log("[storeaction.js] response partnerOfferings", response)
            if (response.status == 200) {
                response = response.data;
                // dispatch(partnerOfferingsResult(response));
            }
        });
    }
}