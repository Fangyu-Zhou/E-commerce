import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from "reselect";

import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";

import './header.scss';
import {ReactComponent as Logo} from "../../media-asset/svg/crown.svg";

const Header = ({currentUser, hiddenCartDropDown}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>

            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }

            <CartIcon />
        </div>
        {
            hiddenCartDropDown ?
                null
                :
                <CartDropDown />
        }
    </div>
);

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCartDropDown: selectCartHidden
})

export default connect(mapStateToProps)(Header);