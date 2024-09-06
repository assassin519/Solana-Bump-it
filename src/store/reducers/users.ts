// usersReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersStateProps } from "../../types/states";
import instance from "../../utils/axios";

const initialState: usersStateProps = {
    error: null,
    users: [],
};

const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        hasError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        getUserData(state, action: PayloadAction<any[]>) {
            state.users = action.payload;
        },
    },
});

// Export the reducer as a named export
export default users.reducer;

// Export the async thunk separately
export const getUsersData = () => {
    return async (dispatch: any) => {
        try {
            const response = await instance.get("/users/all");
            dispatch(users.actions.getUserData(response.data.data.users));
        } catch (error) {
            dispatch(users.actions.hasError(error instanceof Error ? error.message : "An error occurred"));
        }
    };
};
