import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Router } from './Router/Router'
import { AuthProvider } from './Context/AuthContext'

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  )
}

export default App
