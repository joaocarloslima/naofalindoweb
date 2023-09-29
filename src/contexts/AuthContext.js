"use client"

import { serverLogin, serverLogout } from "@/actions/auth";


const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user, setUser] = useState(null)

    async function login(credenciais){
        const resp = await serverLogin(credenciais)

        if (resp?.error) return resp
        
        setUser({email: credenciais.email})
        
    }

    function logout(){
        setUser(null)
        serverLogout()
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}