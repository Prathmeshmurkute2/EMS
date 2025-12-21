import React, { useEffect } from 'react'
import Header from '../Others/Header.jsx'
import CreateTask from '../Others/CreateTask.jsx'
import AllTask from '../Others/AllTask.jsx'

const AdminDashboard = () => {

  return (
    <div className='h-screen w-full p-7'>
        <Header />
        <CreateTask />
        <AllTask />

    </div>
  )
}

export default AdminDashboard
