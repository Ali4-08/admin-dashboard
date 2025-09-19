import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("authUser");
        if(saved) {
            setUser(JSON.parse(saved));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem("authUser", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("authUser");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}