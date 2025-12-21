import React, { useContext } from 'react'
import Login from "./Components/Auth/Login.jsx"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx"
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {
  useEffect(() => {
  setLocalStorage();
}, []);

    const [user, setUser] = useState(null);
    const authData = useContext(AuthContext);
    console.log(authData)

    const handleLogin = (email, password) =>{
      if(email == 'admin@company.com' && password == '123'){
        setUser('admin')
        console.log("Admin logged in")
      }else if(email == 'user@company.com' && password == '123'){
        setUser('employees')
        console.log("Employees logged in")
      }
      else{
        alert('Invalid Credentials')
      }
    }

    

  return (
   <>
   {!user ? <Login handleLogin={handleLogin} /> : ''}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
   

   </>
  )
}

export default App
