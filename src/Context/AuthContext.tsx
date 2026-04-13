import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)

    const handleLogin = (username, password) => {
        if (username && password) {
            setAuthenticated(true)
        }
    }

    const handleLogout = () => {
        setAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{ authenticated, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}


