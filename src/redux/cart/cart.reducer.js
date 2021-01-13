import {cartActionType} from "./cart.actionType";

const INITIAL_STATE = {
    hiddenCartDropDown: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hiddenCartDropDown: !state.hiddenCartDropDown
            };
        default:
            return state;
    }
}

export default cartReducer;