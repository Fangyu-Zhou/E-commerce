import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IDgtqKwvFtAtF5aiYE2tVskLV9tPSGWLPVr5QXQM3a5Ff8V9x8Tdtp5RY9hsDiVkLD54qpY3g1Vou3XFSwKnG4n00MMAd5aoA';

    const _onToken = token => {
        console.log("token:", token);
        alert('Payment Successful! Thank you for your payment!');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Test Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={_onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;