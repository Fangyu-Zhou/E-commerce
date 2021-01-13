import {cartActionType} from "./cart.actionType";

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
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default cartReducer;