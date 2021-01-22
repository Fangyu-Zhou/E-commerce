import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectCurrentUser} from "./redux/user/user.selectors";
import {setCurrentUser} from "./redux/user/user.actions";

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";
import CheckOutPage from "./pages/checkout-page/checkout-page";
import SignInPage from "./pages/sign-in-and-up-page/sign-in-page";

import './App.css';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage />)}
                    />
                    <Route exact path='/checkout' component={CheckOutPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
