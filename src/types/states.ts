import { EventProps, UserProfileProps } from ".";

export interface usersStateProps {
    error: string | null,
    users: UserProfileProps[],
}

export interface eventsStateProps {
    error: string | null,
    events: EventProps[],
    event: EventProps | null
}

export interface userStateProps {
    user: UserProfileProps,
    error: string | null,
    isLoggedIn: boolean,
}