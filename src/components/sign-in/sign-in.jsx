import React from 'react';

import {auth} from '../../firebase/firebase.utils'

import FormInput from "../wigets/form-input/form-input";
import CustomButton from "../wigets/custom-button/custom-button";

import {SignInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    _handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (e) {
            console.log(e.message);
        }

    }

    _handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {email, password} = this.state;

        return (
            <div className='sign-in'>
                <h2>I have already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this._handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label='Email'
                        value={email}
                        handleChange={this._handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        handleChange={this._handleChange}
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
