import { ReactNode } from "react";
// Define types for the Tab component
export interface TabProps {
    label: string;
    children: ReactNode;
}

// Define types for the Tabs component
export interface TabsProps {
    children: React.ReactElement<TabProps>[];
}