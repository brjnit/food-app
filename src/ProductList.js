import {SELECT_STORE, SUMBIT_ENQUIRY, GET_ENQUIRY_LIST, UPDATE_STORE_OFFERINGS,  
    GET_PRODUCT_LIST, UPDATE_PARTNERE_CONNECTION_STATUS, SELECT_GROUP_AS_STORE, GET_PARTNER_WORKFLOW_CONFIG,
    ADD_FREE_TEXT_PRODUCT, HANDLE_CUSTOM_ITEM_INPUT, RESET_CUSTOM_PRODUCTS} from './actionTypes'
import moment from 'moment'
import APIRequest from "../../APIRequest/APIRequest";

export const getProductsList = () =>{
    return (dispatch, getState)=>{
        let apiRequest = new APIRequest()
        let inputParam = {}
        console.log("[StoreAction.js] selectedStore :: ", JSON.stringify(getState().store.selectedStore))
        inputParam["partnerId"] = getState().store.selectedStore.id;
        apiRequest.callAPI("getProductsList", inputParam).then((response) =>{
            console.log("[StoreAction.js] response", response)
            if(response.status == 200){
                console.log("[StoreAction.js] getProductsList response :: "+ JSON.stringify(response))
                if(response.dataAvailable){
                    dispatch(getProductsListResult(response.data));
                }
            }
        });
    }  
}