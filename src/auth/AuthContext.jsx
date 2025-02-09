import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        return JSON.parse(localStorage.getItem("auth")) || { token: null, isAuthenticated: false };
    });

    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);

    const login = (token) => {
        setAuth({ token, isAuthenticated: true });
    };

    const logout = () => {
        setAuth({ token: null, isAuthenticated: false });
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
