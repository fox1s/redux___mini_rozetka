import React, {useEffect} from "react";
import "./Product.css";
import basket_free from '../../img/basket/basket_free.png'
import basket_with_elem from '../../img/basket/basket_with_elem.png'
import wishlist_true from '../../img/wish-list/wishlist_true.png'
import wishlist_false from '../../img/wish-list/wishlist_false.png'
import {useSelector} from "react-redux";

export default function ProductComponent({product, basketClick, wishListClick}) {


    const wishlist = useSelector(({wishlist}) => wishlist.wishlist)
    console.log('render')
    useEffect(() => {

    }, [wishlist,product])

    const isLoggedIn = false
    let basket, wishlist_img;
    if (isLoggedIn) {
        basket = <img src={basket_free} width={28} onClick={() => {
        }} alt={'basket'}/>;
    } else {
        basket = <img src={basket_with_elem} width={28} onClick={() => {
        }} alt={'basket'}/>;
    }

    // const xxx = wishlist.filter(value => value.id === product.id)
    // console.log(xxx)
    // console.log(wishlist.includes(product))

    if (wishlist.includes(product)) {
        // console.log('1')
        wishlist_img = <img src={wishlist_true} width={28} onClick={() => wishListClick(product)} alt={'wishlist'}/>;

    } else {
        // console.log('2')
        wishlist_img = <img src={wishlist_false} width={28} onClick={() => wishListClick(product)} alt={'wishlist'}/>;

    }


    return (
        <div className={'product-item'}>
            {product.id}. {product.title} - {product.price} <br/>
            {/*<button onClick={() => basketClick(product)}>У корзину</button>*/}
            {/*<button onClick={() => wishListClick(product)}>До списку бажань</button>*/}

            {/*<img src={basket_free} width={28} onClick={() => wishListClick(product)}/>*/}
            {/*<img src={basket_with_elem} width={28} onClick={() => wishListClick(product)}/>*/}
            {basket} {wishlist_img}

            <br/>

        </div>
    );
}
