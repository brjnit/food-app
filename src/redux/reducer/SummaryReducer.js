import {SUMMARY_DONE} from '../actions/actionTypes'

const initialState = {
    result :{

    }
}
const SummaryReducer = (state = initialState, action) => {
    switch (action.type){
        case SUMMARY_DONE: {
            return {
                ...state,
                result : {
                    ...action.result
                }
            }
        }        
    }    
    return state;
}

export default SummaryReducer