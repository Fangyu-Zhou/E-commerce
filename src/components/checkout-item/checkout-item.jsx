import React from 'react';
import {connect} from 'react-redux';

import {removeItemById, addItem, decreaseItem} from "../../redux/cart/cart.action";

import './checkout-item.scss';

const CheckOutItem = ({cartItem, removeItemById, addItem, decreaseItem}) => {
    const {id, name, imageUrl, quantity, price} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={`${imageUrl}`} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => removeItemById(id)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemById: itemId => dispatch(removeItemById(itemId)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})
export default connect(null, mapDispatchToProps)(CheckOutItem);