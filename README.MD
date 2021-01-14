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
<b>Use reselect library => createSelector to split values in the state so that not all component will get rerendered after any state value has changed</b>