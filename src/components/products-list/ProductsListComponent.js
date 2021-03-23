import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from "../product/ProductComponent";
import {appProduct, fetchProductsList} from "../../redux/action-creators";
import {appProductToBasket} from "../../redux/action-creators/basketList-action-creators";

export default function ProductsListComponent() {

    const productsList = useSelector(({productsList}) => productsList.productsList)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchProductsList(dispatch).then(r => r)
    }, [dispatch])


    const wishListClick = (product) => {
        dispatch(appProduct(product))
    }
    const basketClick = (product) => {
        dispatch(appProductToBasket(product))
    }

    return (
        <div>
            {
                productsList.map(product => <ProductComponent key={product.id} product={product}
                                                              basketClick={basketClick} wishListClick={wishListClick}/>)
            }
        </div>
    );
}
