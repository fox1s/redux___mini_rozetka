import './Header.css'

import Popup from "reactjs-popup";

import React from 'react'
import {useSelector} from 'react-redux'

export default function HeaderComponent() {

    const wishlist = useSelector(({wishlist}) => wishlist.wishlist)
    const Card = ({wishlist}) => (
        <div className="card">
            <div className="header">Обрані товари</div>
            <div className="content">
                {
                    wishlist.map(product => <div key={product.id}>{product.id}. {product.title}</div>)
                }
            </div>
        </div>
    );

    return (
        <div className={'main-header'}>

            <button>Обране</button>
            <button>Корзина</button>

            <Popup
                trigger={<button className="button"> Обране </button>}
                position="bottom center"
                on="hover">
                <Card title="Bottom Center" wishlist={wishlist}/>
            </Popup>
        </div>
    );
}
