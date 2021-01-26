import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";

import CheckOutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

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

        {
            cartItems.map(item => (
                <CheckOutItem key={item.id} cartItem={item}/>
            ))
        }

        <div className='total'>
            <span>TOTAL: ${cartTotalPrice}</span>
        </div>

        <div className='test-warning'>
            *Please use this test credit card for payments with this test website*
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV:123
        </div>

        <StripeCheckoutButton price={cartTotalPrice} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckOutPage);