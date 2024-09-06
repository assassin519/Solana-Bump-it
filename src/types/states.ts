import { UserProfileProps } from ".";

export interface usersStateProps {
    error: string | null,
    users: UserProfileProps[],
}

export interface userStateProps {
    user: UserProfileProps,
    error: string | null,
    isLoggedIn: boolean,
}