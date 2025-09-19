import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [darkmode, setDarkmode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        if(darkmode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkmode])

    return (
        <ThemeContext.Provider value={{darkmode, setDarkmode}}>
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme(){
    return useContext(ThemeContext);
}