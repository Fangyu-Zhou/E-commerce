import React from 'react';

import SignIn from '../../components/sign-in/sign-in'
import SignUp from "../../components/sign-up/sign-up";


import './sign-in-page.scss';

const SignInPage = () => (
    <div className='sign-in-page'>
        <SignIn />
        <SignUp />
    </div>
);
export default SignInPage;