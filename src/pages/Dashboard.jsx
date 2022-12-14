import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../styles/pageStyles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className='main_dashboard'>
      <div className="left"><Sidebar/></div>
      <div className="right"><Outlet/></div>
    </div>
  )
}

export default Dashboard