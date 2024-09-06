// import { ReactNode } from "react";

export type KeyedObject = {
    [key: string]: string | number | KeyedObject;
}; 
export interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}
// Auth types
export interface UserProfileProps {
    id?: number,
    email?: string,
    avatar?: string,
    username: string,
    password?: string,
    role?: string,
}
export interface AuthProps {
    isLoggedIn: boolean,
    isInitialized?: boolean,
    user?: UserProfileProps | null,
    token?: string | null
}

export interface AuthActionProps {
    type: string,
    payload?: AuthProps,
}

export type JWTContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfileProps | null | undefined;
    logout: () => void;
    login: (username: string, password: string) => Promise<void>;
    register: (email: string, password: string, username: string) => Promise<void>;
    resetPassword?: (email: string) => Promise<void>;
    updateProfile?: VoidFunction;
};

//   Notification context
export interface NotificationContextValue {
    showNotification: (msg: string, type: "success" | "error" | "info" | "warning") => void;
}
