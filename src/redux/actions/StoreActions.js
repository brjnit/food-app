import APIRequest from '../../network/APIRequest/APIRequest';
import { PARTNERS_LIST, PARTNER_OFFERINGS, PARTNER_DETAILS, ORDER } from './actionTypes';
import { formatDateTime } from '../../util';

export const getPartnerLists = (partnerId) => {
    return (dispatch) => {
        const response = [{
            id: "23",
            imageUrl: "https://captainamericadiag618.blob.core.windows.net/uploaded-files/message_f6c00241-524e-4381-ad10-18bdbfaad1f5.jpg",
            title: "Litto",
            description: "Cuisines from Bihar"
        },
        {
            id: "24",
            imageUrl: "https://captainamericadiag618.blob.core.windows.net/uploaded-files/message_f6c00241-524e-4381-ad10-18bdbfaad1f5.jpg",
            title: "Biryani By Killo",
            description: "Always be reason to celebrate"
        }]
        dispatch(partnersListResult(response));
        // let apiRequest = new APIRequest();
        // apiRequest.callAPI("getPartnerDetails", { "partnerId": partnerId }).then((response) => {
        //     console.log("[StoreAction.js] getPartnerDetails status :: " + response)
        //     if (response.status == 200) {
        //         response = response.data;
        //         dispatch(partnerDetailsResult(response));
        //     }
        // });
    }
}

const partnersListResult = (data) => {

    return {
        type: PARTNERS_LIST,
        partnersList: data
    }
}

export const getPartnerDetails = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("getPartnerDetails", { "partnerId": partnerId }).then((response) => {
            console.log("[StoreAction.js] getPartnerDetails status :: " + response)
            if (response.status == 200) {
                response = response.data;
                dispatch(partnerDetailsResult(response));
            }
        });
    }
}

const partnerDetailsResult = (data) => {
    const partnerData = {
        name: data.name,
        address: data.address,
        contactNumber: data.contactNumber,
        description: data.description,
        image: data.coverPicture
    }
    return {
        type: PARTNER_DETAILS,
        partnerDetails: partnerData
    }
}

export const getProductsList = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("getProductsList", { "partnerId": partnerId }).then((response) => {
            console.log("[StoreAction.js] getPartnerDetails status :: " + response)
            if (response.status == 200) {
                response = response.data;
                dispatch(productListResult(response));
            }
        });
    }
}

const productListResult = (data) => {
    return {
        type: PARTNER_DETAILS,
        productList: data
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

const partnerOfferingsResult = (data) => {
    const catloglaData = data != null && data
        .filter(item => (item.partnerOfferingType == "CATALOGUE" && item.isActive))
        .map(item => {
            console.log("CATALOGUE item : ", item)
            return {
                key: item.id,
                imageUrl: item.imageUrl,
                offering: item.offering,
                offeringSubText: item.offeringSubText,
                partnerOfferingType: item.partnerOfferingType,
                longDescription: item.longDescription,
                createdAt: item.createdAt,
                cost: item.cost
            }
        });

    // const bannerData = data != null && data
    //     .filter(item => (item.partnerOfferingType == "BANNER" && item.isActive))
    //     .map(item => {
    //         console.log(" BANNER item : ", item)
    //         const updateDate = formatDateTime(item.updatedAt)
    //         return {
    //             imageUrl: item.imageUrl,
    //             offering: item.offering,
    //             offeringSubText: item.offeringSubText,
    //             partnerOfferingType: item.partnerOfferingType,
    //             longDescription: item.longDescription,
    //             updateDate: updateDate,
    //             cost: item.cost
    //         }
    //     });
    let bannerData = {}
    let updateDate = null
    data != null && data.forEach(item => {
        if (item.partnerOfferingType == "BANNER" && item.isActive) {
            const newUpdateDate = formatDateTime(item.updatedAt)
            if (newUpdateDate != null) {
                updateDate = newUpdateDate;
                bannerData = {
                    imageUrl: item.imageUrl,
                    offering: item.offering,
                    offeringSubText: item.offeringSubText,
                    partnerOfferingType: item.partnerOfferingType,
                    longDescription: item.longDescription,
                    updateDate: updateDate,
                    cost: item.cost
                }
            }
        }
    });

    return {
        type: PARTNER_OFFERINGS,
        result: {
            catloglaData: catloglaData,
            bannerData: bannerData
        }
    }
}

export const getOrders = (data) => {
    return {
        type: ORDER,
        orders: data
    }
}