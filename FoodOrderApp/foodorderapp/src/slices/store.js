import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import restaurantSlice from './restaurantSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});
