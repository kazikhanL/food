import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBigCard } from "@interfaces/cards/IBigCard";
import { IAddition } from "@interfaces/IAddition";
import { ISmallCard } from "@interfaces/cards/ISmallCard";
import { IStoreBigCard, IStoreSmallCard, IStoreAdditionCard } from "@interfaces/store";

interface CartState {
    big: IStoreBigCard[];
    small: IStoreSmallCard[];
    addition: IStoreAdditionCard[];
}

const initialState: CartState = {
    big: [],
    small: [],
    addition: [],
};

const NOT_FOUND_POSSITION = -1;

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addAdditionCard(state, action: PayloadAction<IAddition>) {
            const newCard: IStoreAdditionCard = { ...action.payload, amount: 1 };
            state.addition.push(newCard);
        },

        removeAdditionCard(state, action: PayloadAction<IAddition>) {
            const index = state.addition.findIndex((addition) => addition.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.addition.splice(index, 1);
            }
        },

        addSmallCard(state, action: PayloadAction<IStoreSmallCard>) {
            state.small.push(action.payload);
        },

        removeSmallCard(state, action: PayloadAction<ISmallCard>) {
            const index = state.small.findIndex((card) => card.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.small.splice(index, 1);
            }
        },

        updateSmallCard(state, action: PayloadAction<IStoreSmallCard>) {
            const index = state.small.findIndex((card) => card.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.small.splice(index, 1, action.payload);
            }
        },

        addBigCard(state, action: PayloadAction<IStoreBigCard>) {
            state.big.push(action.payload);
        },

        removeBigCard(state, action: PayloadAction<IBigCard>) {
            const index = state.big.findIndex((card) => card.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.big.splice(index, 1);
            }
        },

        updateBigCard(state, action: PayloadAction<IStoreBigCard>) {
            const index = state.big.findIndex((card) => card.id === action.payload.id);

            if (index !== NOT_FOUND_POSSITION) {
                state.big.splice(index, 1, action.payload);
            }
        },
    },
});

export const { 
    addAdditionCard, 
    removeAdditionCard,
    addSmallCard,
    removeSmallCard,
    updateSmallCard,
    addBigCard,
    removeBigCard,
    updateBigCard,
} = cartSlice.actions;

export default cartSlice.reducer;
