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
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
