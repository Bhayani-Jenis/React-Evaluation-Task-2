import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../Pages/Dashboard";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }

])

