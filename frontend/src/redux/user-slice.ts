import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    token: string;
    user: string;
    isSigned: boolean;
}

const initialState: UserState = {
    token: "",
    user: "",
    isSigned: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction<UserState>) => {
            return action.payload;
        },
        resetUser: (_state, _action: PayloadAction<void>) => {
            return initialState;
        }
    },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
