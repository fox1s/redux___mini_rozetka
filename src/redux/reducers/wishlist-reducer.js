import {ADD_PRODUCT, REMOVE_ALL_PRODUCTS} from '../action-types'

const initialState = {
    wishlist: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            console.log(action.payload)
            if (state.wishlist.indexOf(action.payload) !== -1) {
                const newWishList = state.wishlist.filter(value => value.id !== action.payload.id)
                console.log(newWishList)
                return {...state, wishlist: newWishList}
            }
            else {

                state.wishlist.push(action.payload)
                console.log([...state.wishlist])
                return {...state, wishlist: [...state.wishlist]}
            }

        }

        case
        REMOVE_ALL_PRODUCTS: {
            return {...state, wishlist: []}
        }
        default: {
            return state;
        }
    }
}

export default reducer;
