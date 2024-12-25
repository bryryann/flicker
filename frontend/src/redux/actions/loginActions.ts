import { authenticateUser, AuthCredentials } from "../../services/auth-service";
import { AppDispatchType } from "../store";
import { setUser } from "../user-slice";
import { initializeFavorites } from "../favorites-slice";

export const performLogin = (cred: AuthCredentials) => async (dispatch: AppDispatchType) => {
    const auth = await authenticateUser(cred);
    const user = { ...auth, user: cred.username }

    dispatch(setUser(user));
    dispatch(initializeFavorites());
}

