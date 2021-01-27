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

Lesson 135
<br>
Use UTF-8 Dingbats for displaying the 'X' for remove button on checkout page
<br>
<br>
1/15/2021, I don't want to do anything today.

1/17/2021, addicted in xiu xian

1/19/2021, first checkin, off time working

1/20: redux persist
<br>
import ```persistReducer``` into root-reducer.js and add configure(local/session storage, reducers need persist)
<br>
import ```persistStore``` into store.js and export persistor
<br>
import ```PersistGate``` into index.js wrap the App.js inside and provide persistor

1/22/2021 Check in

1/23/2021 Check in

1/23/2021 Check in

CSS, vw(view width) vs % => vw is the width percent of the whole screen while the % is the percent of the containers width

1/25 Check in