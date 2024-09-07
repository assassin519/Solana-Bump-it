//Custom hook to use the ThemeContext
import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext'

interface ThemeContextType {
    darkTheme: boolean;
    toggleTheme(): void;
}

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default useTheme;