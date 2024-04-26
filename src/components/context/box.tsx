import { useContext } from "react"
import { ThemeProvider } from "./themeProvider"


export const Box = () => {
    const theme = useContext(ThemeProvider)
    return (
        <div style={{ background: theme.primary.bg, color: theme.secondary.text }}>
            hiw hello i'm react developer
        </div>
    )
}