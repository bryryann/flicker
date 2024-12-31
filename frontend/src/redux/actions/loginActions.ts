import { authenticateUser, endSession, AuthCredentials } from "../../services/auth-service";
import { AppDispatchType } from "../store";
import { setUser, resetUser } from "../user-slice";
import { initializeFavorites, resetFavorites } from "../favorites-slice";
import { initializeWatchlist, resetWatchlist } from "../watchlist-slice";

export const performLogin = (cred: AuthCredentials) => async (dispatch: AppDispatchType) => {
    const auth = await authenticateUser(cred);
    const user = { ...auth, user: cred.username }

    dispatch(setUser(user));
    dispatch(initializeFavorites());
    dispatch(initializeWatchlist());
}

export const performLogoff = () => async (dispatch: AppDispatchType) => {
    dispatch(resetUser());
    dispatch(resetFavorites());
    dispatch(resetWatchlist());
}
