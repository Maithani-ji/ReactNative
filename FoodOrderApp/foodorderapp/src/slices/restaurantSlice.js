// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   restaurant: null,
// };

// export const restaurantSlice = createSlice({
//   name: 'restaurant',
//   initialState,
//   reducers: {
//     setrestaurant: (state, action) => {
//       state.restaurant = action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {setrestaurant} = restaurantSlice.actions;
// export const selectrestaurant = state => state.restaurant.restaurant;
// export default restaurantSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setrestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setrestaurant} = restaurantSlice.actions;
export const selectrestaurant = state => state.restaurant?.restaurant || null;
// Use optional chaining (?.) to safely access properties

export default restaurantSlice.reducer;
