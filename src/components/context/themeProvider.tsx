

import { createContext } from "react";
import { theme } from "./theme";

export const ThemeProvider = createContext(theme)

type themeProps = {
    children: React.ReactNode ,
}

export const ThemeContext = ({ children }: themeProps) => {
    return (

        <ThemeProvider.Provider value={theme}>
            {children}
        </ThemeProvider.Provider>
    )

}