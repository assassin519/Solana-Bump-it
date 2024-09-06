//third - party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// Reducer - state management
import { LOGIN, LOGOUT } from "../store/reducers/action";
import authReducer from '../store/reducers/auth';

import instance from "../utils/axios";
import { AuthProps, JWTContextType } from "../types";
import { createContext, useEffect, useReducer } from 'react';


const chance = new Chance();

// constant
const initialState: AuthProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};
interface DecodedToken {
    exp: number;
}

const verifyToken = (token: string): boolean => {
    if (!token) {
        return false;
    }
    try {
        const decoded = jwtDecode < DecodedToken > (token);
        return decoded.exp > Date.now() / 1000;
    } catch (error) {
        console.error("Invalid token", error);
        return false;
    }
};

const setSession = (token?: string | null) => {
    if (token) {
        localStorage.setItem('token', token);
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        localStorage.removeItem('token');
        delete instance.defaults.headers.common.Authorization;
    }
}

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

const JWTContext = createContext < JWTContextType | null > (null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        const init = async () => {
            try {
                const token = window.localStorage.getItem('token');
                if (token && verifyToken(token)) {
                    setSession(token);
                    const response = await instance.get('/users/me');
                    const { user } = response.data;
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);
    const login = async (email: string, password: string) => {

        const response = await instance.post('/auth/login', { email, password });
        console.log("========>", response.data)
        const { token, user } = response.data;
        setSession(token);
        dispatch({
            type: LOGIN,
            payload: {
                isLoggedIn: true,
                user
            }
        });
    };

    const register = async (email: string, password: string, username: string) => {
        const id = chance.bb_pin();

        const response = await instance.post('/auth/register', {
            id,
            email,
            password,
            username,
        });
        let users = response.data;

        if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
            const localUsers = window.localStorage.getItem('users');
            users = [
                ...JSON.parse(localUsers!),
                {
                    id,
                    email,
                    password,
                    name: `${username} `
                }
            ];
        }

        window.localStorage.setItem('users', JSON.stringify(users));
    };

    const logout = () => {
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    // const resetPassword = async (email: string) => { };

    // const updateProfile = async (email: string, password: string, username: string) => {
    //     const response = await instance.post('/auth/register', {
    //         email,
    //         password,
    //         username,
    //     });
    //     alert(response)
    // };

    //   if (state.isInitialized !== undefined && !state.isInitialized) {
    //     return <Loader />;
    //   }

    return <JWTContext.Provider value={{ ...state, login, logout, register }}>{children}</JWTContext.Provider>;
}

export default JWTContext;
