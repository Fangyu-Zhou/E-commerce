import React from 'react';

import './custom-button.scss';

const Custombutton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
        {children}
    </button>
);

export default Custombutton;
