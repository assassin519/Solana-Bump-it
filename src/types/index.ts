import { ReactNode } from "react";

export type KeyedObject = {
    [key: string]: string | number | KeyedObject;
};
export interface TabProps {
    title: string;
    content: string;
}

export interface IconProps {
    className?: string;
    size?: number;
    color?: string;
}
export interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    connect?: () => void;
}

export interface TopEventCardProps {
    text: string,
    btn_text: string,
    onClick: () => void,
    img_url?: string,
    className?: string,
}
export interface MyPropertyProps {
    className: string,
    text: string,
    icon: ReactNode,
    value: number,
}
export interface EventProps {
    id?: number,
    tid?: number,
    slug?: string,
    title?: string,
    description?: string,
    volume?: number,
    image?: string,
    icon?: string,
    active?: boolean,
    closed?: boolean,
    new?: boolean | undefined,
    liquidity?: number,
    commentCount?: number,
    startDate?: Date | undefined,
    endDate?: Date | undefined,
    market: MarketProps[],
}

export interface MarketProps {
    image: string | undefined;
    id?: number,
    question?: string | undefined,
    endDate?: Date | undefined,
    active?: boolean,
    closed?: boolean,
    new?: boolean,
    description?: string
    groupItemTitle?: string
    volume?: number,
    outcome?: string[],
    outcomePrice?: number[],
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
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, username: string,) => Promise<void>;
    resetPassword?: (email: string) => Promise<void>;
    updateProfile?: VoidFunction;
};

//   Notification context
export interface NotificationContextValue {
    showNotification: (msg: string, type: "success" | "error" | "info" | "warning") => void;
}
