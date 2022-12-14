import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PersonFill } from "react-bootstrap-icons"
import { KeyFill } from "react-bootstrap-icons"
import { EyeFill } from "react-bootstrap-icons"
import { EyeSlashFill } from "react-bootstrap-icons"
import '../styles/pageStyles/Login.css'

const Login = () => {

    const [showPassword, setShowPassword] = useState(true)

    return (
        <div className='login_screen'>
            <form action="#" className="login_form">
                <div className="form_group">
                    <label htmlFor="#"><PersonFill /></label>
                    <input type="text" name="username" id="username" placeholder='Username' />
                </div>
                <div className="form_group pass">
                    <label htmlFor="#"><KeyFill /></label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" className='password' placeholder='Password' />
                    <div onClick={() => { setShowPassword(!showPassword) }} className="show_password">{showPassword ? <EyeSlashFill /> : <EyeFill />}</div>
                </div>
                <div className="form_group">
                    <Link to='dashboard' className='login_btn'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Login