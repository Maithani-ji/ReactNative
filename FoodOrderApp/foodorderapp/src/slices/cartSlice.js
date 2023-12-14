// import {createSlice} from '@reduxjs/toolkit';
// import {createSelector} from 'reselect'; //for memoization in selectcarditemsbyid

// const initialState = {
//   items: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addtocart: (state, action) => {
//       state.items = [...state.items, action.payload];
//     },
//     removefromcart: (state, action) => {
//       let newcart = [...state.items];
//       let itemindex = state.items.findIndex(
//         item => item._id === action.payload.id,
//       );
//       if (itemindex >= 0) {
//         newcart.splice(itemindex, 1);
//       } else {
//         console.log('cant remove the item that is not in the cart');
//       }
//       state.items = newcart;
//     },
//     emptycart: (state, action) => {
//       state.items = [];
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {removefromcart, addtocart, emptycart} = cartSlice.actions;
// export const selectcartitems = state => state.cart.items;

// // export const selectcartitemsbyid = (state, id) =>
// // state.cart.items.filter(item => item._id == id);
// // export const selectCartItemsById = createSelector(
// //   [state => state.cart.items, (_, id) => id],
// //   (cartItems, id) => cartItems.filter(item => item._id === id),
// // );
// export const selectcartitemsbyid = createSelector(
//   [state => state.cart.items, (_, id) => id],
//   (cartItems, id) => cartItems.filter(item => item._id === id),
// );

// export const selectcarttotal = state =>
//   state.cart.items.reduce((total, item) => (total = total + item.price), 0);
// export default cartSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removefromcart: (state, action) => {
      let newcart = [...state.items];
      let itemindex = state.items.findIndex(
        item => item._id === action.payload.id,
      );
      if (itemindex >= 0) {
        newcart.splice(itemindex, 1);
      } else {
        console.log('cant remove the item that is not in the cart');
      }
      state.items = newcart;
    },
    emptycart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {removefromcart, addtocart, emptycart} = cartSlice.actions;
export const selectcartitems = state => state.cart.items;

// Create a selector to fetch the id from the props
export const selectItemId = (_, id) => id;

export const selectcartitemsbyid = createSelector(
  [selectcartitems, selectItemId],
  (cartItems, id) => cartItems.filter(item => item._id === id),
);

export const selectcarttotal = state =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
