import React, { ReactNode } from "react";

export interface BtnProps {
    text?: string | number,
    price?: number,
    value?: string,
    icon?: ReactNode,
    onClick?: () => void,
    onMouseLeave?: () => void,
    onMouseEnter?: () => void,
    className?: string,
    children?: React.ReactNode
}

export interface YesNoProps {
    text?: string,
    price?: string,
    icon?: ReactNode,
    onClick?: () => void,
    className?: string,
}