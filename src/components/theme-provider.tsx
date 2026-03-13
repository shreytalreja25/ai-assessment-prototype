"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "yellow" | "blue";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("yellow");

    useEffect(() => {
        const savedTheme = localStorage.getItem("accent-theme") as Theme;
        if (savedTheme) {
            setThemeState(savedTheme);
            applyTheme(savedTheme);
        }
    }, []);

    const applyTheme = (t: Theme) => {
        const html = document.documentElement;
        html.classList.remove("theme-yellow", "theme-blue");
        if (t === "blue") {
            html.classList.add("theme-blue");
        } else {
            html.classList.add("theme-yellow");
        }
    };

    const setTheme = (t: Theme) => {
        setThemeState(t);
        applyTheme(t);
        localStorage.setItem("accent-theme", t);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
};
