import {combineReducers} from "redux";
import wishlistReducer from './wishlist-reducer'
import productsListReducer from './products-list-reducer'


export const reducer = combineReducers({
    wishlist: wishlistReducer,
    productsList: productsListReducer
})
