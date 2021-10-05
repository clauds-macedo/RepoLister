import React, { useState, createContext } from 'react'


type User = {
    userData: any,
    setUserData: any
}

export const context = createContext< User | null >(null);

export const ContextProvider = (props: any) => {
    const[userData, setUserData] = useState({})
    return(
        <context.Provider value = {{
            userData, setUserData
        }}>
            {props.children}

        </context.Provider>
    )
}