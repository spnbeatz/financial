"use client"

import { useState } from "react";
import DefaultLayout from "@/layouts/default";

import { Navbar } from "@/components/navbar";



export const AuthScreen = () => {
    const [ loginScreen, setLoginScreen ] = useState<boolean>(true);

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
            <Navbar />
            <div className="flex flex-col items-center justify-center" style={{width: '25%', gap: '15px'}}>

                <button className="button">Zaloguj się</button>
            </div>
        </div>
        
    )
}