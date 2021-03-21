import {SET_PRODUCTS_LIST} from "../action-types";

export const setProductsList = (payload) => ({type: SET_PRODUCTS_LIST, payload})

export const fetchProductsList = async (dispatch) => {
    const productsList = await fetch('https://fakestoreapi.herokuapp.com/products')
        .then(value => value.json());
    dispatch(setProductsList(productsList))

}
