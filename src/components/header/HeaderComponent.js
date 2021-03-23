import './Header.css'

import Popup from "reactjs-popup";

import React from 'react'
import {useSelector} from 'react-redux'
import CardComponent from "../card/CardComponent";

export default function HeaderComponent() {

    const {wishlist, basketList} = useSelector(({wishlist: {wishlist}, basketList: {basketList}}) => ({
        wishlist,
        basketList
    }))


    return (
        <div className={'main-header'}>

            <Popup
                trigger={<button className="button"> Список бажань </button>}
                position="bottom center"
                on="hover">
                <CardComponent title="Список бажань" items={wishlist}/>
            </Popup>

            <Popup
                trigger={<button className="button"> Корзина </button>}
                position="bottom center"
                on="hover">
                <CardComponent title="Корзина" items={basketList}/>
            </Popup>
        </div>
    );
}
