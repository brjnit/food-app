import {GET_ALL_ENQUIRIES, SUMBIT_ENQUIRY} from '../actions/actionTypes'

const initialState = {
    enquiries :[]
}
const UserEnquiryReducer = (state = initialState, action) => {
    console.log("usrDtls", action)
    switch (action.type){
        case GET_ALL_ENQUIRIES : {
            return {
                ...state,
                enquiries : action.enquiries
            }
        } 
        case SUMBIT_ENQUIRY: {
            return {
                ...state,
                selectedEnquiry : {...action.newRequest},
                newEnquiryId : action.newRequest.id
            }
        }
    }    
    return state;
}

export default UserEnquiryReducer