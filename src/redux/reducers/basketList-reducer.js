import {ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCTS_FROM_BASKET} from '../action-types'

const initialState = {
    basketList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET: {
            if (state.basketList.indexOf(action.payload) !== -1) {
                const newBasketList = state.basketList.filter(value => value.id !== action.payload.id)
                return {...state, basketList: newBasketList}
            } else {
                state.basketList.push(action.payload)
                return {...state, basketList: [...state.basketList]}
            }

        }
        case REMOVE_PRODUCTS_FROM_BASKET: {
            return {...state, wishlist: []}
        }
        default: {
            return state;
        }
    }
}

export default reducer;
