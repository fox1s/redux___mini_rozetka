import {REMOVE_PRODUCTS_LIST, SET_PRODUCTS_LIST} from '../action-types'

const initialState = {
    productsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_LIST: {
            return {...state, productsList: action.payload}
        }
        case REMOVE_PRODUCTS_LIST: {
            return {...state, productsList: []}
        }
        default: {
            return state;
        }
    }
}

export default reducer;

