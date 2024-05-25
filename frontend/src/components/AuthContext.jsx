import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({Children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.stringify(localStorage.getItem("user")) || null
    );

    const login = () => {
        //TO  DO
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login }}>
            {Children}
        </AuthContext.Provider>
    )
}