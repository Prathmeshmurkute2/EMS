import React from 'react'
import Header from '../Others/Header.jsx'
import TaskListNumber from '../Others/TaskListNumber.jsx'
import TaskList from '../TaskList/TaskList.jsx'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard
