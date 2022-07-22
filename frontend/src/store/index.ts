import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoriteReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
