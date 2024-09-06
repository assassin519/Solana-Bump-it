import { AuthActionProps, AuthProps } from "../../types";
import { LOGIN, REGISTER, LOGOUT } from "./action";

export const initialState: AuthProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
}

// ==============================|| AUTH REDUCER ||============================== //

const auth = (state = initialState, action: AuthActionProps) => {
    switch (action.type) {
        case LOGIN: {
            const { user } = action.payload!;
            return {
                ...state,
                isLoggedIn: true,
                user
            }
        }
        case REGISTER: {
            const { user } = action.payload!;
            return {
                ...state,
                // isLoggedIn: true,
                isInitialized: true,
                user
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isInitialized: true,
                isLoggedIn: false,
                user: null
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default auth;