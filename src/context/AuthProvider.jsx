import React,{createContext, useState, useEffect} from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    
    useEffect(()=>{
       useEffect(() => {
    const { employees2, admin2 } = getLocalStorage(); // use correct names
    setUserData({ employees: employees2, admin: admin2 });
}, []);


    },[])
  return (
    <div>
        <AuthContext.Provider value={userData}>
            { children }
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
