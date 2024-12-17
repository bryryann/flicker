import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useSelector, useDispatch } from "react-redux";
import userReducer from "./user-slice";

const persistConfig = {
    key: "root",
    storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            }
        })
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

