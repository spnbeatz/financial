"use client"

import React, { useContext, createContext, useState, useEffect } from 'react';

interface User {
    username: string,
    email: string
}

interface AuthContextType {
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const defaultValue: AuthContextType = {
    token: "",
    setToken: () => {},
    user: null,
    setUser: () => {}
}

const AuthContext = createContext<AuthContextType>(defaultValue);

interface AuthProviderProps {
    children: React.ReactNode,
    fallback: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children, fallback}) => {
    const [token, setToken] = useState<string>("");
    const [user, setUser] = useState<User | null>(null);

/*     if(token == ""){
        return <>{fallback}</>
    } */

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context;
}