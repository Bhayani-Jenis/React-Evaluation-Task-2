import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { handleLogin, authenticated } = useContext(AuthContext)

    useEffect(() => {
        if (authenticated) {
            navigate('/dashboard')
        }
    }, [authenticated])
    
    return (
        <div className='loginForm'>
            <div className="username">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={() => handleLogin(username, password)}>Login</button>
        </div>
    )
}

export default Login
