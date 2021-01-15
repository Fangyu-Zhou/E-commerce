import {cartActionType} from "./cart.actionType";
import {addItemToCart} from "./cart.utils";
import {removeItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
    hiddenCartDropDown: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hiddenCartDropDown: !state.hiddenCartDropDown
            };
        case cartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;