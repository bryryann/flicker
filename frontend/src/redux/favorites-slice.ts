import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Favorites = number[];

const initialState: Favorites = [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavorites(_state, action: PayloadAction<Favorites>) {
            return action.payload;
        },
    }
});

export const { setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
