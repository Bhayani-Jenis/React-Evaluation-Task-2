import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const {authenticated}=useContext(AuthContext)
    
    if(!authenticated){
        return <Navigate to='/'/>
    }
    return <Outlet/>
   
}

export default ProtectedRoute
