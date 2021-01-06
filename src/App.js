import React from 'react';
import {Route} from 'react-router-dom'

import Homepage from "./pages/homepage/homepage";

import './App.css';

function App() {
    return (
        <div>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/hats' component={Hats} />
        </div>
    );
}

function Hats() {
    return (
        <div>Hats page</div>
    )
}

export default App;
