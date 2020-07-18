import {PARTNERS_LIST} from '../actions/actionTypes'

const initialState = {
    partnersList : []
}
const PartnersReducer = (state = initialState, action) => {
    switch (action.type){
        case PARTNERS_LIST: {
            return {
                ...state,
                partnersList :  action.partnersList
            }
        }        
    }    
    return state;
}

export default PartnersReducer