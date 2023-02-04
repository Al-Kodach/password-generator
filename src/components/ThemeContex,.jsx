import { createContext, useState, useEffect } from "react";
const ThemeContext = createContext(null)
const htmlElement = document.documentElement

function ThemeContextProvider({ children }) {
    const [ theme, setTheme ] = useState(() => localStorage.getItem('theme') || [])
    const systemTheme = window.matchMedia(' (prefers-color-scheme: dark) ') 
   
    const toggleTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
    }
   
    useEffect(() => {
        if(theme === 'dark' || ( !theme && systemTheme.matches )) {
            htmlElement.classList.add('dark')
            setTheme('dark')  
        } else {
            htmlElement.classList.remove('dark')
            setTheme('light')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }