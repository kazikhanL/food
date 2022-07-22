import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBigCard } from "@interfaces/cards/IBigCard";
import { IAddition } from "@interfaces/IAddition";
import { ISmallCard } from "@interfaces/cards/ISmallCard";


interface CartState {
    big: IBigCard[];
    small: ISmallCard[];
    addition: IAddition[];
}

const initialState: CartState = {
    big: [],
    small: [],
    addition: [],
};

const NOT_FOUND_POSSITION = -1;

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addAdditionToFavorite(state, action: PayloadAction<IAddition>) {
            state.addition.push(action.payload);
        },

        removeAdditionFromFavorite(state, action: PayloadAction<IAddition>) {
            const index = state.addition.findIndex((card) => card.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.addition.splice(index, 1);
            }
        },

        addSmallCardToFavorite(state, action: PayloadAction<ISmallCard>) {
            state.small.push(action.payload);
        },

        removeSmallCardFromFavorite(state, action: PayloadAction<ISmallCard>) {
            const index = state.small.findIndex((card) => card.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.small.splice(index, 1);
            }
        },

        addBigCardToFavorite(state, action: PayloadAction<IBigCard>) {
            state.big.push(action.payload);
        },

        removeBigCardFromFavorite(state, action: PayloadAction<IBigCard>) {
            const index = state.big.findIndex((card) => card.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.big.splice(index, 1);
            }
        },
    },
});

export const { 
    addAdditionToFavorite, 
    removeAdditionFromFavorite, 
    addSmallCardToFavorite,
    removeSmallCardFromFavorite,
    addBigCardToFavorite,
    removeBigCardFromFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
