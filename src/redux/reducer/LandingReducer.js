import { ADD, PARTNER_DETAILS, PARTNER_OFFERINGS, ORDER, PRODUCT_LIST } from '../actions/actionTypes'

const initialState = {
    offerings: [],
    partnerDetails: {},
    orders:{},
    productList: {}
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
                offerings: action.result
            }
        }
        case PARTNER_DETAILS: {
            return {
                ...state,
                partnerDetails: { ...action.partnerDetails }
            }
        }

        case PRODUCT_LIST: {
            return {
                ...state,
                productList: { ...action.productList }
            }
        }

        case ORDER: {
            return {
                ...state,
                orders: {...action.orders}
            }
        }
    }
    return state;
}

export default LandingReducer