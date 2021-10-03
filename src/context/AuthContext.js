import React, { useState, createContext } from "react"


export const AuthContext = createContext()

const AuthContextprovider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {props.children}
        </AuthContext.Provider >
    )


}

export default AuthContextprovider
