import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from "../product/ProductComponent";
import {appProduct, fetchProductsList} from "../../redux/action-creators";

export default function ProductsListComponent() {

    const productsList = useSelector(({productsList}) => productsList.productsList)
    const wishlist = useSelector(({wishlist}) => wishlist.wishlist)
    const dispatch = useDispatch()
    // console.log(wishlist)

    useEffect(() => {
        fetchProductsList(dispatch).then(r => r)
    }, [dispatch])


    const wishListClick = (product) => {
        dispatch(appProduct(product))
    }
    const basketClick = (product) => {
        console.log(wishlist)
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
