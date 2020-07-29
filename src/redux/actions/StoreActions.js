import APIRequest from '../../network/APIRequest/APIRequest';
import { PARTNERS_LIST, PARTNER_OFFERINGS, PARTNER_DETAILS, ORDER, GET_GROUP_PARTER_DATA,SELECT_GROUP_AS_STORE,SELECT_STORE } from './actionTypes';
import { formatDateTime } from '../../util';

export const getPartnerLists = (partnerId) => {
    return (dispatch) => {
        let apiRequest = new APIRequest();
        apiRequest.callAPI("partnersInSameGroup", { "partnerId": partnerId }).then((response) => {
            console.log("[StoreAction.js] partnersInSameGroup status :: " + response)
            if (response.status == 200) {
                response = response.data;
                dispatch(partnersListResult(response));
            }
        });
    }
}

const partnersListResult = (data) => {
    
    const partnersList = data != null && data
    // .filter(item => (item.partnerOfferingType == "CATALOGUE" && item.isActive))
     .map(item => {
         return {id: item.id,
         imageUrl: item.coverPicture,
         title: item.name,
         description: item.description}
     })

    return {
        type: PARTNERS_LIST,
        partnersList: partnersList
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

export const getPartnerDetailsByInvite = (inviteCode) =>{
    return (dispatch, getState)=>{
        let apiRequest = new APIRequest()
        let inputParam = {};
        inputParam["inviteCode"] = inviteCode;
        apiRequest.callAPI("getPartnerDetailsByInvite", inputParam).then((response) =>{
            console.log("[StoreAction.js] response", response)
            if(response.status == 200){
                console.log("[StoreAction.js] getPartnerDetailsByInvite response :: "+ JSON.stringify(response))
                if(response.dataAvailable){
                    if(response.data.isGroup){
                        dispatch(selectStore(response.data))
                        dispatch(getPartnerLists(response.data.id))
                        //pushScreen('mainApp', 'dailyget.explore');
                    } else {
                        dispatch(selectStore(response.data));
                        //startBottomTabs();
                    }    
                }
            }
        });
    }  
}

export const selectStore = (selectedStoreOrGroup) =>{
    return {
        type: SELECT_STORE,
        selectedStoreOrGroup : selectedStoreOrGroup
    }
  }
  
//   export const selectGroupAsStore = (selectedGroup) =>{
      
//       return {
//           type: SELECT_GROUP_AS_STORE,
//           selectedGroup : selectedGroup
//       }
// }

// export const getPartnerInGroup = (partnerId) => {
//     return (dispatch)=>{
//         let apiRequest = new APIRequest();
//         apiRequest.callAPI("getPartnerInGroup", {"partnerId": partnerId}).then((response) =>{
//             console.log("[UserAction.js] response getPartnerInGroup", response)
//             if(response.status == 200){
//                 response = response.data;
//                 dispatch(getPartnerInGroupResult(response));
//             }
//         });   
//     }  
// }

// const getPartnerInGroupResult = (groupPartnerData) => {
//     return {
//         type: GET_GROUP_PARTER_DATA,
//         groupPartnerData : groupPartnerData
//     }
// }
