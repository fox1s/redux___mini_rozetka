import {combineReducers} from "redux";
import wishlistReducer from './wishlist-reducer'
import basketListReducer from './basketList-reducer'
import productsListReducer from './products-list-reducer'


export const reducer = combineReducers({
    wishlist: wishlistReducer,
    basketList: basketListReducer,
    productsList: productsListReducer
})
