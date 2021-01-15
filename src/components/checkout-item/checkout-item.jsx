import React from 'react';
import {connect} from 'react-redux';

import {removeItemById} from "../../redux/cart/cart.action";

import './checkout-item.scss';

const CheckOutItem = ({cartItem, removeItemById}) => {
    const {id, name, imageUrl, quantity, price} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={`${imageUrl}`} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => removeItemById(id)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemById: itemId => dispatch(removeItemById(itemId))
})
export default connect(null, mapDispatchToProps)(CheckOutItem);