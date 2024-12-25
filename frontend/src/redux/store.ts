import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useSelector, useDispatch } from "react-redux";
import userReducer from "./user-slice";
import favoritesReducer from "./favorites-slice";

const persistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    user: userReducer,
    favorites: favoritesReducer
});
const persistedUserReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer: persistedUserReducer,
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

export type AppDispatchType = Awaited<ReturnType<typeof useAppDispatch>>;
export type AppSelectorType = Awaited<ReturnType<typeof useAppSelector>>;
