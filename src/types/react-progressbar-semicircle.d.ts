declare module 'react-progressbar-semicircle' {
    import * as React from 'react';

    interface ProgressBarProps {
        percentage: number;
        diameter: number,
        strokeWidth?: number;
        color?: string;
        showPercentValue,
        stroke: string,
    }

    export class ProgressBar extends React.Component<ProgressBarProps> { }
    export default ProgressBar;
}