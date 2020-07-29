import {PARTNERS_LIST, GET_GROUP_PARTER_DATA,PARTNER_OFFERINGS,SELECT_STORE } from '../actions/actionTypes'

const initialState = {
    partnersList : [],

    selectedStoreOrGroup : {

    },
    groupPartnerData: [],
    offerings: [],
}
const PartnersReducer = (state = initialState, action) => {
    switch (action.type){
        case PARTNERS_LIST: {
            return {
                ...state,
                partnersList :  action.partnersList
            }
        }  
        
        case SELECT_STORE: {
            return {
                ...state,
                selectedStoreOrGroup : {
                    ...action.selectedStoreOrGroup
                }

            }
        }
        case PARTNER_OFFERINGS: {
            return {
                ...state,
                offerings: action.result
            }
        }

        case GET_GROUP_PARTER_DATA: {
            return {
                ...state,
                groupPartnerData : {
                    ...action.groupPartnerData
                }

            }
        }
    }    
    return state;
}

export default PartnersReducer