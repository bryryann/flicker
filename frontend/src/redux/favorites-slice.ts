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
        toggleFavorite(state: number[], action: PayloadAction<number>) {
            const movieId = action.payload;
            if (state.includes(movieId))
                return state.filter(id => id != movieId);

            state.push(movieId);
        },
    },
});

export const { setFavorites, toggleFavorite } = favoritesSlice.actions;

export const initializeFavorites = () => {
    return async (dispatch: AppDispatchType) => {
        const favorites: number[] = await getFavorites();
        dispatch(setFavorites(favorites));
    }
}

export default favoritesSlice.reducer;
