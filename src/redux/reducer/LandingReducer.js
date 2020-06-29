import { ADD, PARTNER_DETAILS, PARTNER_OFFERINGS, ORDER } from '../actions/actionTypes'

const initialState = {
    offerings: {

    },
    details: {

    },
    orders: {

    }
}
const LandingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                offerings: {
                   // ...action.selectedStore
                }
            }
        }

        case PARTNER_OFFERINGS: {
            return {
                ...state,
                offerings: {
                    //...action.selectedStore
                }
            }
        }
        case PARTNER_DETAILS: {
            return {
                ...state,
                details: action.partnerDetails

            }
        }
        case ORDER: {
            return {
                ...state,
                orders: action.orders
            }
        }

    }
    return state;
}

export default LandingReducer