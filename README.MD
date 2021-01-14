Lesson 120
<br>
How to make a store item style
```
&:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
```

Lesson 126
<br>
React Memorization: caching state value when not necessary to rerender the certain components
<br>
<br>
<b>Use reselect library => createSelector to split values in the state so that not all component will get rerendered after any state value has changed</b>
<br>
```
const selectCart = state => state.cart

const selectUser = state => state.user

export const selectCartItems = createSelector(
    [selectCart], //selectCart is the input selector above
    cart => cart.cartItems // cart is the output of the selectCart
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
);

//multiple selectors cross
export const selectCartItems = createSelector(
    [selectCart, selectUser], 
    (cart, user) => cart.cartItems //We can do some logic between cart and user here
);
```