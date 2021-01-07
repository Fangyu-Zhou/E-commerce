import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";
import SignInPage from "./pages/sign-in-and-up-page/sign-in-page";

import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signin' component={SignInPage}/>
            </Switch>
        </div>
    );
}

export default App;
