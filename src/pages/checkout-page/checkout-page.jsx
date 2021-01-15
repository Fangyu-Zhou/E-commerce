import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";


import './checkout-page.scss';

const CheckOutPage = ({cartItems, cartTotalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        <div className='cart-item-row'>
            {
                cartItems.map(item => (
                    <div>{item.name}</div>
                ))
            }
        </div>

        <div className='total'>
            <span>TOTAL: ${cartTotalPrice}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckOutPage);