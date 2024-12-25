import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getFavorites } from "../services/user-data-services";
import { AppDispatchType } from "./store";

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

export const initializeFavorites = () => {
    return async (dispatch: AppDispatchType) => {
        const favorites: number[] = await getFavorites();
        dispatch(setFavorites(favorites));
    }
}

export default favoritesSlice.reducer;
