import React, {useEffect} from "react";
import "./Product.css";
import basket_free from '../../img/basket/basket_free.png'
import basket_with_elem from '../../img/basket/basket_with_elem.png'
import wishlist_true from '../../img/wish-list/wishlist_true.png'
import wishlist_false from '../../img/wish-list/wishlist_false.png'
import {useSelector} from "react-redux";

export default function ProductComponent({product, basketClick, wishListClick}) {


    const {wishlist, basketList} = useSelector(({wishlist: {wishlist}, basketList: {basketList}}) => ({
        wishlist,
        basketList
    }))
    console.log('render')
    useEffect(() => {

    }, [wishlist, product])


    let basket_img, wishlist_img;
    if (basketList.includes(product)) {
        basket_img = <img src={basket_with_elem} width={28} onClick={() => basketClick(product)} alt={'basket'}/>;
    } else {
        basket_img = <img src={basket_free} width={28} onClick={() => basketClick(product)} alt={'basket'}/>;
    }


    if (wishlist.includes(product)) {
        wishlist_img = <img src={wishlist_true} width={28} onClick={() => wishListClick(product)} alt={'wishlist'}/>;
    } else {
        wishlist_img = <img src={wishlist_false} width={28} onClick={() => wishListClick(product)} alt={'wishlist'}/>;

    }


    return (
        <div className={'product-item'}>
            {product.id}. {product.title} - {product.price} <br/>
            {basket_img} {wishlist_img}

            <br/>

        </div>
    );
}
