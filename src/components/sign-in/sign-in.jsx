import React from 'react';

import FormInput from "../wigets/form-input/form-input";

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    _handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
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

                    <input type="submit" name="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;
