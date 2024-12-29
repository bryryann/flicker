import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWatchlist } from "../services/user-data-services";
import { AppDispatchType } from "./store";

const initialState: number[] = [];

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        setWatchlist(_state, action: PayloadAction<number[]>) {
            return action.payload;
        },
        toggleWatchlist(state: number[], action: PayloadAction<number>) {
            const movieId = action.payload;
            if (state.includes(movieId))
                return state.filter(id => id != movieId);

            state.push(movieId);
        }
    },
});

export const { setWatchlist, toggleWatchlist } = watchlistSlice.actions;

export const initializeWatchlist = () => {
    return async (dispatch: AppDispatchType) => {
        const data: number[] = await getWatchlist();
        dispatch(setWatchlist(data));
    }
}

export default watchlistSlice.reducer;
