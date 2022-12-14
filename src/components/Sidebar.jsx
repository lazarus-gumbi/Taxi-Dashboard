import React from 'react'
import User from '../assets/user.svg'
import '../styles/componentStyles/Sidebar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
  return (
    <div className='main_sidebar'>
        <div className="sidebar_top">
            <div className="profile_card">
                <div className="profile_name">
                    <img src={User} alt="" /><h1>Admin</h1>
                </div>
                <button className="logout_btn">LOGOUT</button>
            </div>
        </div>
        <div className="sidebar_bottom">
            <ul>
                {SidebarData.map((val, key) => {
                    return(
                        <CustomLink key={key} to={val.link} >
                            <div className="icon">{val.icon}</div>
                            <div className="title">{val.title}</div>
                        </CustomLink>

                    )
                })}
            </ul>
        </div>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li id='nav' className={isActive ? 'active' : ''}>
        <Link to={to} {...props} className="side_nav">
          {children}
        </Link>
      </li>
    )
  }

export default Sidebar